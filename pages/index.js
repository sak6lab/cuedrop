import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Cue<span className="text-white">Drop</span>
        </h1>

        <p className="mt-3 text-2xl">
          Learn to drink water again!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 whitespace-nowrap">
          <div className="backdrop-filter backdrop-blur p-4 bg-white bg-opacity-20 rounded shadow-glass">
            <p className="text-xl text-white">Look For The Cue</p>
            <svg className="mx-auto mt-2" width="128" height="128" viewBox="0 0 280 248" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="20" fill="#60A5FA"/>
              <circle cx="230" cy="50" r="50" fill="#34D399"/>
              <path d="M150 148L193.301 223H106.699L150 148Z" fill="#F87171"/>
            </svg>
          </div>
          <div className="backdrop-filter backdrop-blur p-4 bg-white bg-opacity-20 rounded shadow-glass">
            <p className="text-xl text-white">Drink Water</p>
            <svg className="mx-auto mt-2" width="128" height="128" viewBox="0 0 201 176" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M187.693 0H12.519C4.89422 0 -0.931867 6.72541 0.123867 14.272L22.0206 153.668C23.7801 165.985 34.3375 175.134 46.8107 175.134H153.557C165.991 175.134 176.588 165.985 178.347 153.668L200.088 14.272C201.143 6.72541 195.317 0 187.693 0ZM173.069 25.0248L161.338 100.099H38.9514L27.1428 25.0248H173.069Z" fill="white" fillOpacity="0.6"/>
              <path d="M47.5347 158L39 100H162L155.473 158H47.5347Z" fill="#60A5FA"/>
            </svg>
          </div>
          <div className="backdrop-filter backdrop-blur p-4 bg-white bg-opacity-20 rounded shadow-glass">
            <p className="text-xl text-white">Get Rewarded</p>
            <svg className="mx-auto mt-2" width="128" height="128" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M87.5 0C39.1633 0 0 39.1633 0 87.5C0 135.837 39.1633 175 87.5 175C135.837 175 175 135.837 175 87.5C175 39.1633 135.837 0 87.5 0ZM95.9677 70.3528C97.1321 55.499 107.329 45.1613 115.726 45.1613C124.123 45.1613 134.32 55.499 135.484 70.3528C135.731 73.3871 131.673 74.5514 130.227 71.9405L126.875 65.9425C124.158 61.1089 120.101 58.3216 115.761 58.3216C111.421 58.3216 107.364 61.1089 104.647 65.9425L101.295 71.9405C99.8135 74.5514 95.7208 73.3871 95.9677 70.3528ZM39.5161 70.3528C40.6804 55.499 50.877 45.1613 59.2742 45.1613C67.6714 45.1613 77.8679 55.499 79.0323 70.3528C79.2792 73.3871 75.2218 74.5514 73.7752 71.9405L70.4234 65.9425C67.7067 61.1089 63.6492 58.3216 59.3095 58.3216C54.9698 58.3216 50.9123 61.1089 48.1956 65.9425L44.8438 71.9405C43.3266 74.5514 39.2692 73.3518 39.5161 70.3528ZM140.741 105.141C137.601 130.192 116.22 149.597 90.3226 149.597H84.6774C58.7802 149.597 37.3992 130.192 34.2591 105.141C33.8357 101.789 36.4819 98.7903 39.869 98.7903H135.131C138.518 98.7903 141.164 101.754 140.741 105.141Z" fill="white" fillOpacity="0.6"/>
            </svg>
          </div>
        </div>

        <div className="backdrop-filter backdrop-blur px-2 py-1 mt-4 cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-40 rounded shadow-glass">Start</div>
      </main>
    </div>
  )
}
