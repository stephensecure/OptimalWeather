import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CurrentForecast from './components/CurrentForecast/CurrentForecast'
import SixteenDayForecast from './components/SixteenDayForecast/SixteenDayForecast'
import './App.scss'

export default function App() {
  return (
    <Router>
      <div className='temp-body'>
        <div className='app-div'>
          <h2 className='weather-title'>Weather Forecast</h2>
        </div>
        <div className='mainbody'>
          <div >
            <Link className='router-style' to='/'>
              Current Weather
            </Link>
            <Link className='router-style' to='/16dayforecast'>
              16 Day Forecast
            </Link>
          </div>
          <Route path='/' exact component={CurrentForecast} />
          <Route path='/16dayforecast' component={SixteenDayForecast} />
        </div>
      </div>
    </Router>
  )
}
