import React, { useState, useEffect } from 'react'
import { getRandomShapes, generateShape } from '../utils/shape-generator.js'

export default function SelectCue({ step, onCueSelect }) {
  if (step !== 0) {
    return null
  }
  // only generate and render shapes on client side
  const [shouldRenderShapes, setShouldRenderShapes] = useState(false)
  useEffect(() => {
    setShouldRenderShapes(true)
  })
  let randomShapes
  if (shouldRenderShapes) {
    randomShapes = getRandomShapes()
  }


  return (
    <>
      <h1 className="text-6xl font-bold text-white">Choose a Cue</h1>
      <div className="grid grid-col-1 gap-4 sm:grid-cols-3 mt-4">
      {shouldRenderShapes && randomShapes.map((cue,index) => {
        const cueHtml = generateShape(cue.shape, cue.color)
        
        return (
          <div key={index} className='backdrop-filter backdrop-blur p-4 mt-4 cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-40 rounded shadow-glass'
            onClick={() => onCueSelect({shape: cue.shape, color: cue.color})}>
            {cueHtml}
          </div>
        )
      })}
      </div>
    </>
  )
}
