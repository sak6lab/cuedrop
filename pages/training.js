import React, { useState, useEffect, useCallback } from 'react'
import SelectCue from '../components/select-cue'
import Sequence from '../components/sequence'
import DrinkWater from '../components/drink-water'
import Reward from '../components/reward'

export default function Training() {
  const [step, setStep] = useState(0)
  const [cue, setCue] = useState(null)
  const onCueSelect = (cue) => {
    setCue(cue)
    setStep(1)
  }
  const onCueClick = (shape,color) => {
    console.log({shape:shape,color:color})
    console.log({cueshape:cue.shape,cuecolor:cue.color})
    if (cue.shape === shape && cue.color === color) {
      setStep(2)
    }
  }
  const onDrinkWater = () => {
    setStep(3)
  }
  const onRewardDone = () => {
    setStep(1)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <SelectCue step={step} onCueSelect={onCueSelect} />
        <Sequence step={step} cue={cue} onCueClick={onCueClick}/>
        <DrinkWater step={step} onDrinkWater={onDrinkWater}/>
        <Reward step={step} onRewardDone={onRewardDone}/>
      </main>
    </div>
  )
}

function isLocalStorageEnabled() {
  const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}
