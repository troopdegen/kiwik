import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../apiClient'
import { Community } from '@prisma/client'

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
    mutationFn: ({ id, data }: { id: string; data: Partial<Community> }) =>
      apiClient.communities.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['communities'] })
      queryClient.invalidateQueries({ queryKey: ['community', variables.id] })
    },
  })
}
