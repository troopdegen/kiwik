
import { prisma } from '../server/prismaClient'
import type { Community } from '@/types/community'

export const communityController = {
  async createCommunity(data: Omit<Community, 'id' | 'createdAt'>) {
    return await prisma.community.create({
      data: {
        name: data.name,
        profileUrl: data.profileUrl,
        bannerUrl: data.bannerUrl,
        memberCount: data.memberCount,
        tokenSymbol: data.tokenSymbol,
        swarmActivity: data.swarmActivity,
        description: data.description
      }
    })
  },

  async getCommunity(id: string) {
    return await prisma.community.findUnique({
      where: { id }
    })
  },

  async updateCommunity(id: string, data: Partial<Omit<Community, 'id' | 'createdAt'>>) {
    return await prisma.community.update({
      where: { id },
      data
    })
  },

  async deleteCommunity(id: string) {
    return await prisma.community.delete({
      where: { id }
    })
  },

  async getAllCommunities() {
    return await prisma.community.findMany({
      orderBy: { memberCount: 'desc' }
    })
  },

  async searchCommunities(query: string) {
    return await prisma.community.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } }
        ]
      }
    })
  }
}
