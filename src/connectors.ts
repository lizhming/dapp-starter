import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const POLLING_INTERVAL = 1000

const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.RPC_URL_1 as string,
  4: process.env.RPC_URL_4 as string,
  1007: process.env.RPC_URL_1007 as string,
  1012: process.env.RPC_URL_1012 as string
}

export const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 42, 56, 77, 97, 99, 128, 256, 1007, 1012]
})

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 4: RPC_URLS[4], 1007: RPC_URLS[1007], 1012: RPC_URLS[1012] },
  defaultChainId: 1
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})
