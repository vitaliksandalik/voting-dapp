/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { publicClient } from '../../client'
import { contractAbi, contractAddress } from '../constants'
import '../styles/Table.css'

export const Table = ({ updateTrigger }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await publicClient.readContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: 'getCandidates',
        args: [],
      })
      setData(result)
    }

    fetchData()
  }, [updateTrigger])
  return (
    <>
      <table className="table">
        <thead>
          <tr className="table-header">
            <th>Index</th>
            <th>Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((candidate, index) => {
            return (
              <tr className="table-row" key={index}>
                <td className="table-data">{index}</td>
                <td className="table-data">{candidate.name}</td>
                <td className="table-data">{Number(candidate.votesCount)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
