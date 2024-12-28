
import PageWithAppbar from '@/components/layout/pageWithAppbar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function CreateCommunityPage() {
  return (
    <PageWithAppbar>
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center">
          <h1>crear comunidad</h1>
          <p className="text-muted-foreground">
            inicia una nueva comunidad descentralizada
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">nombre</Label>
            <Input id="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">descripción</Label>
            <Input id="description" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tokenSymbol">símbolo del token</Label>
            <Input id="tokenSymbol" required />
          </div>
          <Button type="submit" className="w-full">
            crear comunidad
          </Button>
        </form>
      </div>
    </PageWithAppbar>
  )
}
