import { getRandomShape } from "../utils/shape-generator"

export default function Sequence({ step, onCueClick }) {
  if (step !== 1) {
    return null
  }
  // render cue
  const [randomCue, randomShape, randomColor] = getRandomShape()
  return (
    <div className="grid grid-col-1">
      <div className="className='backdrop-filter backdrop-blur p-4 mt-4 cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-40 rounded shadow-glass animate-pulse"
        onClick={onCueClick(randomShape,randomColor)}>
        {randomCue}
      </div>
    </div>
  )
}
