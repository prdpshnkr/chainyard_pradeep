import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SingleBlock = (props) => {

  const [blockIndex, setBlockIndex] = useState()
  const [blockFee, setBlockFee] = useState()
  const [blockHeight, setBlockHeight] = useState()
  const [blockNext_block, setBlockNext_block] = useState()
  const [blockPrev_block, setBlockPrev_block] = useState()
  const [blockReceived_time, setBlockReceived_time] = useState()

  useEffect(() => {
    axios.get(`https://blockchain.info/rawblock/0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103`, {
      params: {
        cors: true
      }
    })
      .then(response => {
        console.log(response.data)
        setBlockIndex(response.data.block_index)
        setBlockFee(response.data.fee)
        setBlockHeight(response.data.height)
        setBlockNext_block(response.data.next_block)
        setBlockPrev_block(response.data.prev_block)
        setBlockReceived_time(response.data.received_time)

      })
  })

  return (
    <div>
      < p > Block Index: {blockIndex}</p >
      < p > Block Fee: {blockFee}</p >
      < p > Block Height: {blockHeight}</p >
      < p > Next Block: {blockNext_block}</p >
      < p > Prev Block: {blockPrev_block}</p >
      < p > Block Time: {blockReceived_time}</p >
    </div>
  )
}

export default SingleBlock
