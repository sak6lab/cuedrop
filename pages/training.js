import React, { useState, useEffect } from 'react'

export default function Training() {
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
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-white">Choose a Cue</h1>
        <div className="grid grid-col-3 gap-4 sm:grid-cols-3 mt-4">
        {shouldRenderShapes && randomShapes.map((shape,index) => {
          return (
            <div key={index} className='backdrop-filter backdrop-blur p-4 bg-white bg-opacity-20 rounded shadow-glass'>
              {shape}
            </div>
          )
        })}
        </div>
        </main>
      </div>
    )
}

function getRandomShapes() {
    const colorArray = ["#60A5FA", "#34D399", "#F87171", "#FBBF24"]
    const randomShapes = []
    for (let i = 0; i < 3; i++) {
      let num = Math.floor(Math.random()*colorArray.length)
      const color = colorArray[num]
      colorArray.splice(num,1)

      const triangle = (
          <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 0L128 128H0L64 0Z" fill={color}/>
          </svg>
      )

      const rectangle = (
          <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="128" height="128" rx="20" fill={color}/>
          </svg>
      )

      const circle = (
          <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="64" cy="64" r="64" fill={color}/>
          </svg>
      )

      const shapeArray = [triangle, rectangle, circle]
      num = Math.floor(Math.random()*3)

      randomShapes.push(shapeArray[num])
    }
    return randomShapes
}
