
import { User, Profile, UserCommunity, UserRole } from '@prisma/client';
import prisma from '@/server/db';

export type CreateUserDTO = {
  id: string;
  appWallet: string;
  extWallet: string;
  username: string;
  email?: string;
};

export type UpdateUserDTO = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;

export type UserWithProfile = User & {
  profile: Profile | null;
};

export class UserService {
  private cache: Map<string, User> = new Map();
  
  constructor() {
    // Repository injection would go here if using a separate repository layer
  }

  async createUser(data: CreateUserDTO): Promise<User> {
    try {
      const user = await prisma.user.create({
        data
      });
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  }

  async getUser(id: string): Promise<User | null> {
    try {
      // Check cache first
      const cachedUser = this.cache.get(id);
      if (cachedUser) return cachedUser;

      const user = await prisma.user.findUnique({
        where: { id }
      });

      if (user) this.cache.set(id, user);
      return user;
    } catch (error) {
      console.error('Error getting user:', error);
      throw new Error('Failed to get user');
    }
  }

  async updateUser(id: string, data: UpdateUserDTO): Promise<User> {
    try {
      const user = await prisma.user.update({
        where: { id },
        data
      });
      
      // Invalidate cache
      this.cache.delete(id);
      return user;
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Failed to update user');
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      await prisma.user.delete({
        where: { id }
      });
      this.cache.delete(id);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Failed to delete user');
    }
  }

  async getUserByWallet(wallet: string): Promise<User | null> {
    try {
      return await prisma.user.findFirst({
        where: {
          OR: [
            { appWallet: wallet },
            { extWallet: wallet }
          ]
        }
      });
    } catch (error) {
      console.error('Error getting user by wallet:', error);
      throw new Error('Failed to get user by wallet');
    }
  }

  async getUserByUsername(username: string): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: { username }
      });
    } catch (error) {
      console.error('Error getting user by username:', error);
      throw new Error('Failed to get user by username');
    }
  }

  async getUserProfile(id: string): Promise<UserWithProfile | null> {
    try {
      return await prisma.user.findUnique({
        where: { id },
        include: {
          profile: true
        }
      });
    } catch (error) {
      console.error('Error getting user profile:', error);
      throw new Error('Failed to get user profile');
    }
  }

  async getUserCommunities(id: string): Promise<UserCommunity[]> {
    try {
      const communities = await prisma.userCommunity.findMany({
        where: { userId: id },
        include: {
          community: true
        }
      });
      return communities;
    } catch (error) {
      console.error('Error getting user communities:', error);
      throw new Error('Failed to get user communities');
    }
  }

  async getUserRoles(id: string): Promise<UserRole[]> {
    try {
      return await prisma.userRole.findMany({
        where: { userId: id },
        include: {
          role: true
        }
      });
    } catch (error) {
      console.error('Error getting user roles:', error);
      throw new Error('Failed to get user roles');
    }
  }

  async searchUsers(query: string): Promise<User[]> {
    try {
      return await prisma.user.findMany({
        where: {
          OR: [
            { username: { contains: query, mode: 'insensitive' } },
            { email: { contains: query, mode: 'insensitive' } }
          ]
        },
        take: 10
      });
    } catch (error) {
      console.error('Error searching users:', error);
      throw new Error('Failed to search users');
    }
  }
}
