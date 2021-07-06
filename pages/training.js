export default function Training() {
    const randomShape = getRandomShape()
    return (
        <div>
        <h1>Choose a Cue</h1>
        {randomShape}

        </div>
    )
}

function getRandomShape() {
 
    const colorArray = ["#60A5FA", "#34D399", "#F87171", "#FBBF24"]
    let num = Math.floor(Math.random()*4)
    const color = colorArray[num]
    
    const triangle = (
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 0L87.3013 75H0.69873L44 0Z" fill={color}/>
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
 
    return shapeArray[num]
}