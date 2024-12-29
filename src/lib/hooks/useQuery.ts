
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import { User, Community, Post, Comment, Vote } from '@prisma/client'

// User hooks
export function useUsers(params?: { page?: number; limit?: number }) {
  return useQuery({
    queryKey: ['users', params],
    queryFn: () => apiClient.users.getAll(params),
  })
}

export function useUser(id: string) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => apiClient.users.getById(id),
    enabled: !!id,
  })
}

export function useCreateUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) =>
      apiClient.users.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

export function useUpdateUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string
      data: Partial<User>
    }) => apiClient.users.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      queryClient.invalidateQueries({ queryKey: ['user', variables.id] })
    },
  })
}

// Community hooks
export function useCommunities(params?: { page?: number; limit?: number }) {
  return useQuery({
    queryKey: ['communities', params],
    queryFn: () => apiClient.communities.getAll(params),
  })
}

export function useCommunity(id: string) {
  return useQuery({
    queryKey: ['community', id],
    queryFn: () => apiClient.communities.getById(id),
    enabled: !!id,
  })
}

export function useCreateCommunity() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: Omit<Community, 'id' | 'createdAt' | 'updatedAt'>) =>
      apiClient.communities.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['communities'] })
    },
  })
}

export function useUpdateCommunity() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string
      data: Partial<Community>
    }) => apiClient.communities.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['communities'] })
      queryClient.invalidateQueries({ queryKey: ['community', variables.id] })
    },
  })
}

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
    mutationFn: ({
      id,
      data,
    }: {
      id: string
      data: Partial<Post>
    }) => apiClient.posts.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      queryClient.invalidateQueries({ queryKey: ['post', variables.id] })
    },
  })
}
