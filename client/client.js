import { createPublicClient, http } from 'viem'
import { sepolia } from 'viem/chains' // Import the network you've deployed the contract on

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
})
