import prisma from '../prismaClient'

export class ApiClient {
  private baseUrl: string
  private headers: Record<string, string>

  constructor(options: { baseUrl: string; headers?: Record<string, string> }) {
    this.baseUrl = options.baseUrl
    this.headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }
  }
}