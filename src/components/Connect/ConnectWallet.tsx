import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

interface Props {
  show?: 'always' | 'connected' | 'disconnected'
}

export default function ConnectWallet({ show = 'always' }: Props) {
  const { data: account } = useAccount()
  if ((show === 'connected' && !account?.address) || (show === 'disconnected' && account?.address)) return null
  return <ConnectButton />
}
