import { getRandomCue , generateShape } from "../utils/shape-generator"
import React, { useState, useEffect } from "react"

export default function Sequence({ step, isTrainingComplete, userCue, trainStep, onCueClick}) {
  if (step !== 1) {
    return null
  }
  let initialCue
  if (isTrainingComplete) {
    initialCue = getRandomCue(userCue, 0)
  } else if (trainStep !== 0) {
    initialCue = getRandomCue(userCue, 0.5 / trainStep)
  } else {
    initialCue = userCue
  }
  const [cue,setCue] = useState(initialCue)

  useEffect(() => {
    if (isTrainingComplete) {
      const interval = setInterval(() => {
        setCue(getRandomCue(userCue, 0))
      },2000)
      return () => clearInterval(interval)
    } else if (trainStep !== 0) {
      const interval = setInterval(() => {
        setCue(getRandomCue(userCue, 0.5 / trainStep))
      },2000)
      return () => clearInterval(interval)
    }
  })
  // render cue
  let cueHtml = (<>{cue && generateShape(cue.shape, cue.color)}</>)
  let trainHtml
  if (trainStep === 0) {
      trainHtml = (
        <>
          <h1 className="text-6xl font-bold text-white">Now it's time to learn your cue!</h1>
          <h2 className="text-3xl font-bold text-white mt-2">Click the cue and follow the loop 3 times</h2>
        </>
      )
  } else if (trainStep === 1) {
      trainHtml = (
        <>
          <h1 className="text-6xl font-bold text-white">2 more times!</h1>
          <h2 className="text-3xl font-bold text-white mt-2">See the cue, drink water, get the meme.</h2>
        </>
      )
  } else if (trainStep === 2) {
      trainHtml = (
        <>
          <h1 className="text-6xl font-bold text-white">1 more time!</h1>
          <h2 className="text-3xl font-bold text-white mt-2">Look for the cue, do the routine, get the reward</h2>
        </>
      )
  }
  return (
    <>
    {!isTrainingComplete && trainHtml}
    <div className="grid grid-col-1">
      <div className="className='backdrop-filter backdrop-blur p-4 mt-4 cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-40 rounded shadow-glass animate-pulse"
        onClick={() => {
          onCueClick(cue.shape,cue.color)
        }}>
        {cueHtml}
      </div>
    </div>
    </>
  )
}
