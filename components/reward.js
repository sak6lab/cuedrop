import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Reward ({ step, onRewardDone }) {
  if (step !== 3) {
    return null
  }
  const [isLoaded,setIsLoaded] = useState(false)
  const [data,setData] = useState(null)
  useEffect(() => {
    fetch("https://meme-api.herokuapp.com/gimme")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true)
        setData(result)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  return (
    <>
      <div className="relative w-10/12 h-80">
        {data && <Image
          src={data.preview[data.preview.length-1]}
          alt={data.title}
          layout="fill"
          objectFit='contain'/>}
      </div>
      <div className="backdrop-filter backdrop-blur px-2 py-1 mt-4 cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-40 rounded shadow-glass"
        onClick={onRewardDone}>
        <button className="text-white">Done</button>
      </div>
    </>
  )
}
