const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? undefined

export const customEvmNetworks = [
  {
    blockExplorerUrls: ['https://zkevm.polygonscan.com/'],
    chainId: 1101,
    name: 'Polygon zkEVM',
    rpcUrls: [`https://polygonzkevm-mainnet.g.alchemy.com/v2/${alchemyApiKey}`],
    iconUrls: ['https://icons.llamao.fi/icons/chains/rsz_polygon%20zkevm.jpg'],
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    networkId: 1101,
  },
  {
    blockExplorerUrls: ['https://explorer-holesky.morphl2.io/'],
    chainId: 2442,
    name: 'Polygon zkEVM ',
    rpcUrls: [`https://polygonzkevm-cardona.g.alchemy.com/v2/${alchemyApiKey}`],
    iconUrls: ['https://icons.llamao.fi/icons/chains/rsz_polygon%20zkevm.jpg'],
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    networkId: 2442,
  },
]
