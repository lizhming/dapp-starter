import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const NETWORKS = [1, 4, 42, 56, 77, 97, 99, 128, 137, 256]

const POLLING_INTERVAL = 3000

const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.RPC_URL_1 as string,
  4: process.env.RPC_URL_4 as string,
  137: process.env.RPC_URL_137 as string,
  42161: process.env.RPC_URL_42161 as string
}

export const injected = new InjectedConnector({
  supportedChainIds: NETWORKS
})


export const network = new NetworkConnector({
  urls: RPC_URLS,
  defaultChainId: 1,
})

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})
