import { useState } from 'react'
import './App.css'
import { useStateContext } from './context'
import Background from './components/Background'
import WeatherCard from './components/WeatherCard'
import MiniCard from './components/MiniCard'

function App() {
  const [input, setInput] = useState('')
  const { weather, thislocation, values, place, setPlace } = useStateContext()
  // console.log(weather);

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }

  return (
    <>
      <div className='w-full h-screen text-white px-8'>
        <nav className='w-full p-3 flex justify-between items-center'>
          <h1 className='text-white text-4xl tracking-wide font-bold font-serif'>Weather Dashboard</h1>
          <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
            <img className='w-[1.5rem] h-[1.5rem]
            ' src='./Images/search.png'
              alt='search' />
            <input
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  // submit form 
                  submitCity()
                }
              }}
              type="text"
              placeholder='Search City'
              value={input}
              onChange={e => setInput(e.target.value)}
              className='focus:outline-none w-full text-slate-400 text-lg' />
          </div>
        </nav>
        <Background />
        <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
          <WeatherCard
            place={thislocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatIndex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />
          <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
            {
              values?.slice(1, 7).map(curr => {
                return (
                  <MiniCard
                    key={curr.datetime}
                    time={curr.datetime}
                    temp={curr.temp}
                    iconString={curr.conditions}
                  />
                )
              })
            }
          </div>
        </main>
      </div>


    </>
  )
}

export default App


