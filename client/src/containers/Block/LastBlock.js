import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LastBlock = () => {

  const [blockIndex, setBlockIndex] = useState()
  const [blockHeight, setBlockHeight] = useState()
  const [blockTime, setBlockTime] = useState(0)

  useEffect(() => {
    axios.get(`https://blockchain.info/latestblock`, {
      params: {
        cors: true
      }
    })
      .then(response => {
        console.log(response.data)
        setBlockIndex(response.data.block_index)
        setBlockHeight(response.data.height)
        setBlockTime(response.data.time)

      })
  })

  return (
    <div>
      < p > Block Index: {blockIndex}</p >
      < p > Block Height: {blockHeight}</p >
      < p > Block Time: {blockTime.toString()}</p >
    </div>
  )
}

export default LastBlock
