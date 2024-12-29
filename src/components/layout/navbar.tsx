'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import MobileMenu from './mobileMenu'
import AuthButton from '../buttons/authButton'

export type MenuItemType = {
  displayText: string
  href: string
  isMobileOnly: boolean
  isExternal?: boolean
}

const MENU_ITEMS: MenuItemType[] = [
  { displayText: 'agentes', href: '/agentes', isMobileOnly: false },
  { displayText: 'arena', href: '/arena', isMobileOnly: false },
  { displayText: 'comunidades', href: '/comunidades', isMobileOnly: false },
  { displayText: 'faq', href: '/faq', isMobileOnly: false },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="top-0 h-20 w-full bg-transparent">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between p-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-5 lg:px-8">
        {/* logo, left navbar element - 1fr */}
        <div className="">
          <Link className="flex items-center" href="/">
            <Image
              src="/images/logos/kukulcan-logo-color.png"
              alt="kiwik logo: kukulcán, co-founder of Frutero Club and kiwik Agent"
              width={128}
              height={128}
              className="w-14 lg:w-12 transition duration-500 ease-in-out hover:rotate-[-25deg]"
            />
            <span className="sr-only">kiwik</span>
          </Link>
        </div>
        {/* navbar items, center navbar element - 1fr */} 
        <div className="z-10 col-span-3 flex items-center justify-center">
          <nav className="hidden gap-6 lg:flex">
            {MENU_ITEMS.filter((menuItem) => !menuItem.isMobileOnly).map(
              (menuItem, index) => (
                <Link
                  key={`${menuItem.displayText}-menuItem-${index}`}
                  className={`inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-foreground transition-colors hover:text-primary focus:text-primary focus:outline-none ${
                    pathname === menuItem.href &&
                    'pointer-events-none underline decoration-primary decoration-[1.5px] underline-offset-[6px] hover:!text-foreground'
                  }`}
                  href={menuItem.href}
                  target={menuItem.isExternal ? '_blank' : ''}
                >
                  {menuItem.displayText}
                </Link>
              ),
            )}
          </nav>
        </div>
        {/* auth + user menu button, right navbar element - 1fr */}
        <div className="hidden lg:flex lg:justify-end">
          <AuthButton />
        </div>
        <MobileMenu menuItems={MENU_ITEMS} pathname={pathname} />
      </div>
    </header>
  )
}
