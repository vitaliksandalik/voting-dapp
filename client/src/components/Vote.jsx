/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { contractAbi, contractAddress } from '../constants'
import '../styles/Vote.css'


export function Vote({ onVote }) {
  const [candidateIndex, setCandidateIndex] = useState('')
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'vote',
    args: [candidateIndex],
  })
  const { data, write } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  const [transactionStatus, setTransactionStatus] = useState(null)

  useEffect(() => {
    if (isSuccess) {
      setTransactionStatus('success')
      onVote()
    } else if (isLoading === false && data) {
      setTransactionStatus('failure')
    }
  }, [isLoading, isSuccess, data, onVote])

  return (
    <div>
      <input
        type="number"
        className="candidate-input"
        placeholder="Candidate index"
        value={candidateIndex}
        onChange={(e) => setCandidateIndex(e.target.value)}
      />
      <button
        className="vote-button"
        disabled={!write || isLoading}
        onClick={() => write()}
      >
        {isLoading ? 'Voting...' : 'Vote'}
      </button>
      {
  transactionStatus === 'success' && (
    <div>
      {/* Check your network and change the Etherscan link accordingly.*/}
      <a href={`https://sepolia.etherscan.io/tx/${data?.hash}`}>
        Etherscan
      </a>
    </div>
  )
}
{
  transactionStatus === 'failure' && (
    <div>
      Transaction failed. Note that you can vote only once.
      <div>
        {/* Check your network and change the Etherscan link accordingly.*/}
        <a href={`https://sepolia.etherscan.io/tx/${data?.hash}`}>
          Etherscan
        </a>
      </div>
    </div>
  )}
    </div>
  )
}
