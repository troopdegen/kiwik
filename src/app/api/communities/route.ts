
import { NextRequest, NextResponse } from 'next/server'
import { communityController } from '@/server/controllers/communityController'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const communityId = searchParams.get('communityId')

    if (communityId) {
      const community = await communityController.findUnique(communityId)
      
      if (!community) {
        return NextResponse.json(
          { error: 'Community not found' },
          { status: 404 }
        )
      }

      return NextResponse.json(community)
    }

    // Get all communities sorted by swarm activity
    const communities = await communityController.findAll()
    const sortedCommunities = communities.sort((a, b) => {
      const aActivity = a.members.length + a.posts.length
      const bActivity = b.members.length + b.posts.length
      return bActivity - aActivity
    })

    return NextResponse.json(sortedCommunities)
  } catch (error) {
    console.error('Error in communities API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
