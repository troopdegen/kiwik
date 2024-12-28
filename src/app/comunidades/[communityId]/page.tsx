
import PageWithAppbar from '@/components/layout/pageWithAppbar'
import { type Community } from '@/types/community'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

async function getCommunity(id: string): Promise<Community> {
  // TODO: Implement API call
  return {} as Community
}

export default async function CommunityPage({
  params,
}: {
  params: { communityId: string }
}) {
  const community = await getCommunity(params.communityId)

  return (
    <PageWithAppbar>
      <div className="space-y-8">
        <div className="relative h-64 w-full">
          <Image
            src={community.bannerUrl}
            alt={`Banner de ${community.name}`}
            fill
            className="object-cover"
          />
          <Link
            href={`/${params.communityId}/editar`}
            className="absolute right-4 top-4"
          >
            <Button variant="secondary">editar comunidad</Button>
          </Link>
        </div>
        <div className="relative -mt-16 flex justify-center">
          <Image
            src={community.profileUrl}
            alt={`Perfil de ${community.name}`}
            width={120}
            height={120}
            className="rounded-full border-4 border-background"
          />
        </div>
        <div className="text-center">
          <h1>{community.name}</h1>
          <p className="text-muted-foreground">
            {community.memberCount} miembros · {community.tokenSymbol}
          </p>
          <p className="mt-4">{community.description}</p>
        </div>
      </div>
    </PageWithAppbar>
  )
}
