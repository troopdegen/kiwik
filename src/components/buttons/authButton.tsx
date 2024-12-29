'use client'

import { type Dispatch, type SetStateAction } from 'react'
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

type AuthButtonProps = {
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>
}

export default function AuthButton({
  size = 'default',
  setIsMenuOpen,
}: AuthButtonProps) {
  const { handleLogOut, setShowAuthFlow, sdkHasLoaded } = useDynamicContext()
  const isLoggedIn = useIsLoggedIn()
  const router = useRouter()

  function login() {
    if (!isLoggedIn) {
      setShowAuthFlow(true)
    } else {
      toast.warning('ya cuentas con una sesión activa')
    }
  }
  async function logout() {
    await handleLogOut()
    router.push('/')
    setIsMenuOpen?.(false)
  }

  if (!sdkHasLoaded) {
    return null
  }

  return (
    <Button
      onClick={isLoggedIn ? logout : login}
      size={size}
      className="font-medium"
    >
      {isLoggedIn ? 'salir' : 'entrar'}
    </Button>
  )
}
