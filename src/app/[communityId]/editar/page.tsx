
import PageWithAppbar from '@/components/layout/pageWithAppbar'
import { type Community } from '@/types/community'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

async function getCommunity(id: string): Promise<Community> {
  // TODO: Implement API call
  return {} as Community
}

export default async function EditCommunityPage({
  params,
}: {
  params: { communityId: string }
}) {
  const community = await getCommunity(params.communityId)

  return (
    <PageWithAppbar>
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center">
          <h1>editar comunidad</h1>
          <p className="text-muted-foreground">actualiza la información</p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">nombre</Label>
            <Input id="name" defaultValue={community.name} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">descripción</Label>
            <Input id="description" defaultValue={community.description} required />
          </div>
          <Button type="submit" className="w-full">
            guardar cambios
          </Button>
        </form>
      </div>
    </PageWithAppbar>
  )
}
