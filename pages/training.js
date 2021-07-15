import React, { useState, useEffect, useCallback } from 'react'
import SelectCue from '../components/select-cue'
import Sequence from '../components/sequence'
import DrinkWater from '../components/drink-water'
import Reward from '../components/reward'

export default function Training() {
  const [step, setStep] = useState(0)
  const [cue, setCue] = useState(null)
  const [isTrainingComplete,setIsTrainingComplete] = useState(false)
  const [trainStep,setTrainStep] = useState(0)

  const onCueSelect = (cue) => {
    localStorage.setItem("shape",cue.shape)
    localStorage.setItem("color",cue.color)
    setCue(cue)
    setStep(1)
  }
  const onCueClick = useCallback((shape,color) => {
    console.log({shape:shape,color:color})
    console.log({cueshape:cue.shape,cuecolor:cue.color})
    if (cue.shape === shape && cue.color === color) {
      if (!isTrainingComplete) {
        console.log("trainStep:", trainStep)
        if (trainStep === 2) {
          localStorage.setItem("isTrainingComplete","true")
          setIsTrainingComplete(true)
        } else {
          setTrainStep(prev => prev + 1)
        }

      }
      setStep(2)
    }
  },[cue,trainStep])
  const onDrinkWater = () => {
    setStep(3)
  }
  const onRewardDone = () => {
    setStep(1)
  }

  useEffect(() => {
    const shape = localStorage.getItem("shape")
    const color = localStorage.getItem("color")
    const isTrainingCompleteLocal = localStorage.getItem("isTrainingComplete")
    if (shape && color && !cue) {
      setCue({shape:shape,color:color})
      setStep(1)
    }
    if (isTrainingCompleteLocal && !isTrainingComplete) {
      setIsTrainingComplete(true)
      setTrainStep(0)
    }

  },[cue])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <SelectCue step={step} onCueSelect={onCueSelect} />
        <Sequence step={step} cue={cue} isTrainingComplete={isTrainingComplete} userCue={cue} trainStep= {trainStep} onCueClick={onCueClick}/>
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
