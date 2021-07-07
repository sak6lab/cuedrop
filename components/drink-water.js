export default function DrinkWater({ step, onDrinkWater }) {
  if (step !== 2) {
    return null
  }
  return (
    <>
    <div className="backdrop-filter backdrop-blur p-4 bg-white bg-opacity-20 rounded shadow-glass animate-pulse">
      <p className="text-xl text-white">Drink Water</p>
      <svg className="mx-auto mt-2" width="128" height="128" viewBox="0 0 201 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M187.693 0H12.519C4.89422 0 -0.931867 6.72541 0.123867 14.272L22.0206 153.668C23.7801 165.985 34.3375 175.134 46.8107 175.134H153.557C165.991 175.134 176.588 165.985 178.347 153.668L200.088 14.272C201.143 6.72541 195.317 0 187.693 0ZM173.069 25.0248L161.338 100.099H38.9514L27.1428 25.0248H173.069Z" fill="white" fillOpacity="0.6"/>
        <path d="M47.5347 158L39 100H162L155.473 158H47.5347Z" fill="#60A5FA"/>
      </svg>
    </div>
    <div className="backdrop-filter backdrop-blur px-2 py-1 mt-4 cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-40 rounded shadow-glass"
      onClick={onDrinkWater}>
      <button className="text-white">Continue</button>
    </div>
    </>
  )
}
