import { prisma } from '../server/prismaClient'

export const voteController = {
  async createVote(userId: string, value: number, postId?: string, commentId?: string) {
    return await prisma.vote.upsert({
      where: {
        userId_postId_commentId: {
          userId,
          postId: postId || null,
          commentId: commentId || null
        }
      },
      update: { value },
      create: { userId, postId, commentId, value }
    })
  },

  async getVotesByPost(postId: string) {
    return await prisma.vote.findMany({
      where: { postId },
      include: { user: true }
    })
  },

  async getVotesByComment(commentId: string) {
    return await prisma.vote.findMany({
      where: { commentId },
      include: { user: true }
    })
  }
}