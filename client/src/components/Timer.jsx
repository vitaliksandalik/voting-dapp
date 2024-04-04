/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { publicClient } from '../../client'
import { contractAbi, contractAddress } from '../constants'
import '../styles/Timer.css'


export const Timer = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await publicClient.readContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: 'getRemainingTime',
        args: [],
      })
      const remainingTimeInSeconds = Number(result)

      const days = Math.floor(remainingTimeInSeconds / (3600 * 24));
      const hours = Math.floor((remainingTimeInSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((remainingTimeInSeconds % 3600) / 60);
      const seconds = Math.floor(remainingTimeInSeconds % 60);

      setData({ days, hours, minutes, seconds })
    }

    fetchData()
    const intervalId = setInterval(fetchData, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div>
        {data && (
          <p className="remaining-time">
            Remaining time:
            {data.days > 0 && ` ${data.days} days,`}
            {data.hours > 0 && ` ${data.hours} hours,`}
            {data.minutes > 0 && ` ${data.minutes} minutes,`}
            {data.seconds > 0 && ` ${data.seconds} seconds`}
          </p>
        )}
      </div>
    </>
  )
}
