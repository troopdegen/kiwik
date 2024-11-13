'use client'

import { useAccount, useBalance, useEnsAvatar, useEnsName } from 'wagmi'
import { useEffect, useState } from 'react'
import { mainnet } from 'viem/chains'
import Image from 'next/image'
import SendNativeTokenModal from './sendNativeTokenModal'
import SendErc20Modal from './sendErc20Modal'
import SwitchNetworkModal from './switchChainModal'

export function ConnectedAccount() {
  const [isMounted, setIsMounted] = useState(false)

  const { address, chain, chainId, status } = useAccount()

  const accountBalance = useBalance({
    address,
  })

  const { data: ensName } = useEnsName({
    address,
    chainId: mainnet.id,
  })
  const { data: ensAvatar } = useEnsAvatar({
    name: ensName!,
    chainId: mainnet.id,
  })

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [isMounted])

  if (!isMounted) {
    return (
      <div>
        <p className="text-lg">Loading...</p>
      </div>
    )
  }

  if (status === 'disconnected') {
    return (
      <div>
        <p className="text-center text-lg">not connected</p>
      </div>
    )
  }

  // if (status === 'connecting') {
  //   return (
  //     <div>
  //       <p className="text-center text-lg">connecting...</p>
  //     </div>
  //   )
  // }

  return (
    <div className="flex flex-col items-center gap-y-4 text-center">
      {ensAvatar && ensName && isMounted && (
        <div className="flex items-center gap-x-2">
          <Image
            alt="ENS Avatar"
            src={ensAvatar}
            className="h-16 w-16 rounded-full"
            height={64}
            width={64}
          />
          {ensName && <p className="text-2xl">{ensName}</p>}
        </div>
      )}
      {address && isMounted && (
        <div className="flex flex-col items-center gap-y-2">
          <p className="text-lg">connected wallet address:</p>
          <p className="text-lg">{address}</p>
        </div>
      )}
      <div className="flex flex-col gap-y-2">
        {accountBalance.data?.value && isMounted && (
          <p className="text-xl">
            Balance: {accountBalance.data?.formatted} ETH
          </p>
        )}
        {chain && chainId && isMounted && (
          <>
            <p className="text-lg">chain: {chain.name}</p>
            <p className="text-lg">chain Id: {chainId}</p>
          </>
        )}
      </div>
      <div className="flex w-full justify-center gap-x-4 px-4">
        <div className="w-1/3">
          {chainId === 80002 ? (
            <SendNativeTokenModal />
          ) : (
            <SwitchNetworkModal buttonText="Send ETH" requiredChainId={80002} />
          )}
        </div>
        <div className="w-1/3">
          {chainId === 80002 ? (
            <SendErc20Modal userAddress={address} />
          ) : (
            <SwitchNetworkModal
              buttonText="Send ERC20"
              requiredChainId={80002}
            />
          )}
        </div>
      </div>
    </div>
  )
}