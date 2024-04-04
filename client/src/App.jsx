import { useCallback, useState } from 'react'
import { WagmiConfig, createConfig } from 'wagmi'
import { publicClient } from '../client'
import Profile from './components/Profile'
import { Table } from './components/Table'
import { Timer } from './components/Timer'
import { Vote } from './components/Vote'
import './styles/App.css'

const config = createConfig({
  autoConnect: true,
  publicClient: publicClient,
})

function App() {
  const [voteUpdateTrigger, setVoteUpdateTrigger] = useState(0)

  const triggerTableUpdate = useCallback(() => {
    setVoteUpdateTrigger((prev) => prev + 1)
  }, [])
  return (
    <WagmiConfig config={config}>
      <Profile />
      <Vote onVote={triggerTableUpdate} />
      <Table updateTrigger={voteUpdateTrigger} />
      <Timer />
    </WagmiConfig>
  )
}

export default App
