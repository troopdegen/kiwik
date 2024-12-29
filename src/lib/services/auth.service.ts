
import { User } from '@prisma/client';
import { Address } from 'viem';
import prisma from '@/server/db';

export class AuthService {
  private cache: Map<string, User> = new Map();
  
  constructor() {
    // Repository injection would go here if using a separate repository layer
  }

  async getOrCreateUser(
    dynamicUserId: string,
    wallet: Address,
    username: string,
  ): Promise<User | null> {
    try {
      // Check cache first
      const cachedUser = this.cache.get(dynamicUserId);
      if (cachedUser) return cachedUser;

      let user = await prisma.user.findFirst({
        where: {
          id: dynamicUserId,
        },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            id: dynamicUserId,
            wallet,
            username,
            displayName: username,
          },
        });
      }

      // Cache the user
      if (user) this.cache.set(dynamicUserId, user);
      return user;
    } catch (error) {
      console.error('Error in getOrCreateUser:', error);
      return null;
    }
  }

  async validateUser(userId: string): Promise<boolean> {
    try {
      const user = await this.getOrCreateUser(userId, '', '');
      return !!user;
    } catch (error) {
      console.error('Error validating user:', error);
      return false;
    }
  }
}
