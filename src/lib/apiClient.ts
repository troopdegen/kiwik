import { User, Community, Post } from '@prisma/client'
import { Address } from 'viem'

interface ApiClientOptions {
  baseUrl: string
  headers?: Record<string, string>
}

interface PaginationParams {
  page?: number
  limit?: number
}

interface ApiResponse<T> {
  data: T
  error?: string
  status: number
}

export class ApiClient {
  private baseUrl: string
  private headers: Record<string, string>

  constructor(options: ApiClientOptions) {
    this.baseUrl = options.baseUrl
    this.headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          ...this.headers,
          ...options.headers,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred')
      }

      return {
        data,
        status: response.status,
      }
    } catch (error) {
      console.error('API Request Error:', error)
      throw error
    }
  }

  // Auth endpoints

  auth = {
    getOrCreateUser: async (data: {
      dynamicUserId: string
      appWallet: Address
      username: string
      extWallet?: Address
    }) => {
      return this.request<User>('/api/auth', {
        method: 'POST',
        body: JSON.stringify(data),
      })
    },
  }

  // User endpoints
  users = {
    getAll: async (params?: PaginationParams) => {
      return this.request<User[]>('/api/users' + this.buildQueryString(params))
    },
    getById: async (id: string) => {
      return this.request<User>(`/api/users/${id}`)
    },
    create: async (data: Omit<User, 'createdAt' | 'updatedAt'>) => {
      return this.request<User>('/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
      })
    },
    update: async (id: string, data: Partial<User>) => {
      return this.request<User>(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      })
    },
    delete: async (id: string) => {
      return this.request<void>(`/api/users/${id}`, {
        method: 'DELETE',
      })
    },
  }

  // Community endpoints
  communities = {
    getAll: async (params?: PaginationParams) => {
      return this.request<Community[]>(
        '/api/communities' + this.buildQueryString(params),
      )
    },
    getById: async (id: string) => {
      return this.request<Community>(`/api/communities/${id}`)
    },
    create: async (data: Omit<Community, 'id' | 'createdAt' | 'updatedAt'>) => {
      return this.request<Community>('/api/communities', {
        method: 'POST',
        body: JSON.stringify(data),
      })
    },
    update: async (id: string, data: Partial<Community>) => {
      return this.request<Community>(`/api/communities/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      })
    },
    delete: async (id: string) => {
      return this.request<void>(`/api/communities/${id}`, {
        method: 'DELETE',
      })
    },
  }

  // Post endpoints
  posts = {
    getAll: async (params?: PaginationParams) => {
      return this.request<Post[]>('/api/posts' + this.buildQueryString(params))
    },
    getById: async (id: string) => {
      return this.request<Post>(`/api/posts/${id}`)
    },
    create: async (data: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>) => {
      return this.request<Post>('/api/posts', {
        method: 'POST',
        body: JSON.stringify(data),
      })
    },
    update: async (id: string, data: Partial<Post>) => {
      return this.request<Post>(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      })
    },
    delete: async (id: string) => {
      return this.request<void>(`/api/posts/${id}`, {
        method: 'DELETE',
      })
    },
  }

  private buildQueryString(
    params?: Record<string, unknown> | PaginationParams | undefined,
  ): string {
    if (!params) return ''
    const query = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        query.append(key, String(value))
      }
    })
    return `?${query.toString()}`
  }
}

export const apiClient = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
})
