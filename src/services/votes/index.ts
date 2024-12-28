import { Vote } from '@prisma/client'

export async function voteOnPost(postId: string, value: number): Promise<Vote> {
  const response = await fetch(`/api/votes/post/${postId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value })
  })
  if (!response.ok) throw new Error('Failed to vote on post')
  return response.json()
}

export async function voteOnComment(commentId: string, value: number): Promise<Vote> {
  const response = await fetch(`/api/votes/comment/${commentId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value })
  })
  if (!response.ok) throw new Error('Failed to vote on comment')
  return response.json()
}

export async function getVotes(postId?: string, commentId?: string): Promise<Vote[]> {
  const entityType = postId ? 'post' : 'comment'
  const id = postId || commentId
  const response = await fetch(`/api/votes/${entityType}/${id}`)
  if (!response.ok) throw new Error('Failed to fetch votes')
  return response.json()
}