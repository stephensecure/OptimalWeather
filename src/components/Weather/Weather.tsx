import React from 'react'
import './Weather.scss'

export interface weatherProps {
  getWeather: (e: React.SyntheticEvent<Element, Event>) => void,
  selectCity: (e: React.ChangeEvent<HTMLInputElement>) => void,
  buttonText: string,
}

export const cities = ['London, UK', 'New York', 'Mumbai', 'Sydney, AU', 'Tokyo']

const Weather = (props: weatherProps) => {
  return (
    <>
    <div className='textstyle'> 
      <h2>Select a city:</h2>
      </div>
      <div className='weather-form'> 
      <form onSubmit={props.getWeather}>
        {cities?.map((city) => (
            <label className='radio' key={city}>
              <input
                type='radio'
                name='city'
                value={city}
                onChange={props.selectCity}
              />
              {city}
            </label>
          ))}
        <div className='button-wrapper'>
          <button className='button' type='submit'>
            {props.buttonText}
          </button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Weather
