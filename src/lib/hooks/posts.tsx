import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import { Post } from '@prisma/client'

// Post hooks
export function usePosts(params?: { page?: number; limit?: number }) {
  return useQuery({
    queryKey: ['posts', params],
    queryFn: () => apiClient.posts.getAll(params),
  })
}

export function usePost(id: string) {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => apiClient.posts.getById(id),
    enabled: !!id,
  })
}

export function useCreatePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>) =>
      apiClient.posts.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}

export function useUpdatePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Post> }) =>
      apiClient.posts.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      queryClient.invalidateQueries({ queryKey: ['post', variables.id] })
    },
  })
}
