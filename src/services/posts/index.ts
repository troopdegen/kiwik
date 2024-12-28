import { Post, Comment } from '@prisma/client'

export async function createPost(title: string, content: string, communityId: string): Promise<Post> {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, communityId })
  })
  if (!response.ok) throw new Error('Failed to create post')
  return response.json()
}

export async function fetchPost(postId: string): Promise<Post> {
  const response = await fetch(`/api/posts/${postId}`)
  if (!response.ok) throw new Error('Failed to fetch post')
  return response.json()
}

export async function createComment(postId: string, content: string): Promise<Comment> {
  const response = await fetch(`/api/posts/${postId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content })
  })
  if (!response.ok) throw new Error('Failed to create comment')
  return response.json()
}