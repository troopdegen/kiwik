import React, { SVGProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  {
    name: 'Farcaster',
    href: 'https://warpcast.com/~/channel/fruteroclub',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 169 155"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M29 0H138V155H122V84H121.843C120.075 64.3773 103.583 49 83.5 49C63.4169 49 46.9253 64.3773 45.157 84H45V155H29V0Z"
          fill="currentColor"
        />
        <path
          d="M0 22L6.5 44H12V133C9.23858 133 7 135.239 7 138V144H6C3.23858 144 1 146.239 1 149V155H57V149C57 146.239 54.7614 144 52 144H51V138C51 135.239 48.7614 133 46 133H40V22H0Z"
          fill="currentColor"
        />
        <path
          d="M123 133C120.239 133 118 135.239 118 138V144H117C114.239 144 112 146.239 112 149V155H168V149C168 146.239 165.761 144 163 144H162V138C162 135.239 159.761 133 157 133V44H162.5L169 22H129V133H123Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/fruteroclub',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: 'https://t.me/fruteroclub',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/fruteroclub',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

export default function Footer({
  isHomePage = false,
}: {
  isHomePage?: boolean
}) {
  return (
    <footer className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 pt-2 pb-4 md:pb-6 flex flex-col md:flex-row md:items-center md:justify-between md:px-6 lg:px-8 gap-y-4">
        <div className="flex items-center justify-center gap-x-8 md:order-2">
          {navigation.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary lg:text-lg"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  className={`${
                    item.name === 'Telegram'
                      ? '-mr-1 mb-0.5 h-7 w-7'
                      : 'h-6 w-6'
                  } text-foreground hover:text-primary`}
                  aria-hidden="true"
                />
              </a>
            </div>
          ))}
        </div>
        {!isHomePage && (
          <div className="md:min-w-1/3 flex flex-col md:flex-row items-center justify-center gap-x-3 md:order-1 gap-y-0">
            <div className="order-2 md:order-1 flex items-center gap-x-1">
              <Image
              src="/images/logos/kukulcan-logo-color.png"
              alt="kiwik logo: kukulcán, co-founder of Frutero Club and kiwik Agent"
              width={128}
              height={128}
              className="w-14 md:w-12 transition duration-300 ease-in-out hover:rotate-[-25deg]"
            />
            </div>
            <div className="order-1 md:order-2 flex items-center gap-x-1">
              <Link href="https://frutero.club" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/logos/frutero-club-logo.png"
                alt="Logo de Frutero Club"
                width={512}
                height={512}
                className="w-24 transition duration-300 ease-in-out hover:scale-90"
              /></Link>

            <p className="text-center leading-5 text-foreground">
              &copy; 2024
            </p>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
