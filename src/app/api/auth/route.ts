import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/services/auth.service'

const authService = new AuthService()

export async function POST(req: NextRequest) {
  const { dynamicUserId, appWallet, extWallet, username } = await req.json()
  if (!dynamicUserId) {
    return NextResponse.json(
      { error: 'dynamicUserId is required' },
      { status: 400 },
    )
  }
  try {
    const userAccount = await authService.getOrCreateUser({
      id: dynamicUserId,
      appWallet,
      username,
      extWallet,
    })

    return NextResponse.json(
      {
        userAccount,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to get or create account' },
      { status: 500 },
    )
  }
}
