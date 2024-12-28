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
