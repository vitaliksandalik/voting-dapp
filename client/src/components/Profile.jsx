import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import '../styles/Profile.css'

export default function Profile() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div>
        <button className="connect-button" onClick={() => disconnect()}>
          Disconnect
        </button>
        <p className="connected-to">Connected to {address}</p>
      </div>
    )
  return (
    <button className="connect-button" onClick={() => connect()}>
      Connect Wallet
    </button>
  )
}
