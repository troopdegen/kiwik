
import { Community } from '@/types/community'

export async function createCommunity(data: Omit<Community, 'id' | 'createdAt'>): Promise<Community> {
  try {
    const response = await fetch('/api/communities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('Failed to create community')
    return response.json()
  } catch (error) {
    console.error('Error creating community:', error)
    throw error
  }
}

export async function getCommunity(id: string): Promise<Community> {
  try {
    const response = await fetch(`/api/communities?communityId=${id}`)
    if (!response.ok) throw new Error('Failed to fetch community')
    return response.json()
  } catch (error) {
    console.error('Error fetching community:', error)
    throw error
  }
}

export async function updateCommunity(id: string, data: Partial<Omit<Community, 'id' | 'createdAt'>>): Promise<Community> {
  try {
    const response = await fetch(`/api/communities/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('Failed to update community')
    return response.json()
  } catch (error) {
    console.error('Error updating community:', error)
    throw error
  }
}

export async function deleteCommunity(id: string): Promise<void> {
  try {
    const response = await fetch(`/api/communities/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('Failed to delete community')
  } catch (error) {
    console.error('Error deleting community:', error)
    throw error
  }
}

export async function getAllCommunities(): Promise<Community[]> {
  try {
    const response = await fetch('/api/communities')
    if (!response.ok) throw new Error('Failed to fetch communities')
    return response.json()
  } catch (error) {
    console.error('Error fetching communities:', error)
    throw error
  }
}

export async function searchCommunities(query: string): Promise<Community[]> {
  try {
    const response = await fetch(`/api/communities?search=${encodeURIComponent(query)}`)
    if (!response.ok) throw new Error('Failed to search communities')
    return response.json()
  } catch (error) {
    console.error('Error searching communities:', error)
    throw error
  }
}
