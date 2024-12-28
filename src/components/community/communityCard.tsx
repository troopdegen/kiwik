
import Image from 'next/image'
import Link from 'next/link'
import { type Community } from '@/types/community'

export default function CommunityCard({ community }: { community: Community }) {
  return (
    <Link href={`/${community.id}`} className="group block">
      <div className="relative rounded-lg border bg-card p-6 transition-shadow hover:shadow-lg">
        <div className="relative h-32 w-full overflow-hidden rounded-t-lg">
          <Image
            src={community.bannerUrl}
            alt={`Banner de ${community.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative -mt-12 flex justify-center">
          <Image
            src={community.profileUrl}
            alt={`Perfil de ${community.name}`}
            width={80}
            height={80}
            className="rounded-full border-4 border-background"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-bold">{community.name}</h3>
          <p className="text-sm text-muted-foreground">
            {community.memberCount} miembros · {community.tokenSymbol}
          </p>
          <p className="mt-2 text-sm">
            actividad del enjambre: {community.swarmActivity}
          </p>
        </div>
      </div>
    </Link>
  )
}
