import { User } from '@prisma/client'
import db from '@/server/db'

export type GetOrCreateUserDTO = {
  id: string
  appWallet: string
  extWallet?: string
  username: string
}

export class AuthService {
  private cache: Map<string, User> = new Map()

  constructor() {
    // Repository injection would go here if using a separate repository layer
  }

  async getOrCreateUser(data: GetOrCreateUserDTO): Promise<User | null> {
    const { id, appWallet, extWallet, username } = data
    try {
      // Check cache first
      const cachedUser = this.cache.get(id)
      if (cachedUser) return cachedUser

      let user = await db.user.findFirst({
        where: {
          id,
        },
      })

      if (!user) {
        user = await db.user.create({
          data: {
            id,
            appWallet,
            extWallet,
            username,
            displayName: username,
          },
        })
      }

      // Cache the user
      if (user) this.cache.set(id, user)
      return user
    } catch (error) {
      console.error('Error in getOrCreateUser:', error)
      return null
    }
  }
}
