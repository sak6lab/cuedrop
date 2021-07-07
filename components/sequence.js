import { getRandomCue , generateShape } from "../utils/shape-generator"
import React, { useState, useEffect } from "react"

export default function Sequence({ step, onCueClick }) {
  if (step !== 1) {
    return null
  }
  const [randomCue,setRandomCue] = useState(getRandomCue())
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomCue(getRandomCue())
    },2000)
    return () => clearInterval(interval)
  })
  // render cue
  const randomCueHtml = generateShape(randomCue.shape, randomCue.color)
  return (
    <div className="grid grid-col-1">
      <div className="className='backdrop-filter backdrop-blur p-4 mt-4 cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-40 rounded shadow-glass animate-pulse"
        onClick={() => {
          onCueClick(randomCue.shape,randomCue.color)
        }}>
        {randomCueHtml}
      </div>
    </div>
  )
}
