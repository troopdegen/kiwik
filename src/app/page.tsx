import PageWithAppbar from '@/components/layout/pageWithAppbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <PageWithAppbar>
      <div className="page space-y-8 text-center">
        <h1>Polygon Hackathon Starter</h1>
        <h3>
          get a head start on your hack with
          <br />
          <Link href="https://ethglobal.com/events/bangkok/prizes#polygon">
            Polygon
          </Link>{' '}
          and{' '}
          <Link href="https://ethglobal.com/events/bangkok/prizes#dynamic">
            Dynamic.xyz
          </Link>
        </h3>
        <Link href="https://learn.dabl.club" target="_blank">
          <Button size="lg">check the tutorial!</Button>
        </Link>
      </div>
    </PageWithAppbar>
  )
}
import PageWithAppbar from '@/components/layout/pageWithAppbar'
import CommunityCard from '@/components/community/communityCard'
import { type Community } from '@/types/community'

async function getCommunities(): Promise<Community[]> {
  // TODO: Implement API call
  return []
}

export default async function CommunitiesPage() {
  const communities = await getCommunities()

  return (
    <PageWithAppbar>
      <div className="space-y-8">
        <div className="text-center">
          <h1>comunidades</h1>
          <p className="text-muted-foreground">
            explora y únete a las comunidades activas
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </div>
    </PageWithAppbar>
  )
}
