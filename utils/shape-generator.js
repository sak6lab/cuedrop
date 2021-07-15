const triangle = (color) => (
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 0L128 128H0L64 0Z" fill={color}/>
    </svg>
)

const rectangle = (color) => (
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="20" fill={color}/>
    </svg>
)

const circle = (color) => (
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill={color}/>
    </svg>
)

const colorArray = ["#60A5FA", "#34D399", "#F87171", "#FBBF24"]
const shapeArray = ["triangle","rectangle","circle"]

export function generateShape(shape,color) {
  if (shape === 'triangle') {
    return triangle(color)
  }
  if (shape === 'rectangle') {
    return rectangle(color)
  }
  if (shape === 'circle') {
    return circle(color)
  }
  return null
}

const cartesian = (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));

export function getRandomShapes() {
    const possibleUniqueShapes = cartesian(shapeArray,colorArray)
    const randomShapes = []
    for (let i = 0; i < 3; i++) {
      let num = Math.floor(Math.random()*possibleUniqueShapes.length)
      randomShapes.push({shape:possibleUniqueShapes[num][0],color: possibleUniqueShapes[num][1]})
      possibleUniqueShapes.splice(num,1)
    }
    return randomShapes
}
// probability: 0 <= p <= 1 : prelim probability to return userCue or generate a
// a random cue that may also be the user's cue
export function getRandomCue(userCue,probability) {
  const r = Math.random()
  // if
  if (r <= probability) {
    return userCue
  }
  const colorIndex = Math.floor(Math.random()*colorArray.length)
  const shapeIndex = Math.floor(Math.random()*shapeArray.length)
  const shape = shapeArray[shapeIndex]
  const color = colorArray[colorIndex]
  return {shape:shape,color: color}
}
