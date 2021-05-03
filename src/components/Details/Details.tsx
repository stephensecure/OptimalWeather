import React, { useState } from 'react'
import Temperature from '../Temperature/Temperature'
import handleSetFilter from '../../utils/handleSetState'
import './Details.scss'

interface dataObj {
  city_name?: string
  datetime: string
  max_temp: number
  min_temp: number
  temp: number
  weather: {
    icon: string
  }
}
type dataArr = dataObj[]

export interface weatherData {
  data?: dataArr
  city_name?: string
}
export interface responseData {
  weatherObj?: weatherData
  error?: boolean
  type?: string
  filter?: boolean
}

export const getDataToRender = (
  renderFiltered: boolean,
  dataArr: dataArr | undefined,
  props: responseData
) => {
  return renderFiltered ? dataArr : props.weatherObj?.data
}

export const filterData = (props: responseData) => (
  minOrMaxValue: string,
  inputValue: number
) => (setData: (value: any) => void) => {
  const filtered = props?.weatherObj?.data?.filter((day) => {
    if (minOrMaxValue === 'min') {
      return day.min_temp <= inputValue
    }
    if (minOrMaxValue === 'max') {
      return day.max_temp >= inputValue
    }
  })
  setData(filtered)
}

export const handleNumberInput = (setValue: (value: number) => void) => (
  e: React.FormEvent<HTMLInputElement>
) => {
  const target = e.target as HTMLInputElement
  setValue(parseInt(target.value))
}

export const getFiltered = (
  setRenderFiltered: (value: boolean) => void,
  props: responseData,
  filter: string,
  value: number,
  setData: (value: any) => void
) => (e: React.SyntheticEvent) => {
  e.preventDefault()
  filterData(props)(filter, value)(setData)
  setRenderFiltered(true)
}

export default function Details(props: responseData) {
  const [value, setValue] = useState<number>(0)
  const handleInput = handleNumberInput(setValue)
  const [data, setData] = useState<[]>([])
  const [renderFiltered, setRenderFiltered] = useState(false)
  const [filter, setFilter] = useState<string>('')
  const selectFilter = handleSetFilter(setFilter)
  const getFilteredTemps = getFiltered(
    setRenderFiltered,
    props,
    filter,
    value,
    setData
  )
  const dataToRender = getDataToRender(renderFiltered, data, props)
  const currentDate = new Date();
  const dateForecast = (datafordate: string) => {
    let dateTimeMap = new Date(datafordate)
    const mappedDate = dateTimeMap.toDateString()
    return mappedDate
  }
  return (
    <div className='detailsbody'>
      {props.error && <p className='warning'>Please choose a city.</p>}
      {props.weatherObj?.data && props.type === 'current' && (
        <div>
          <h3>{currentDate.toDateString()}</h3>
          <h5>{currentDate.toLocaleTimeString()}</h5>
          <h3 className='city-style'>
            <strong>{props.weatherObj.data[0].city_name}</strong>
          </h3>
          <p>{Math.round(props.weatherObj.data[0].temp)} °C</p>
          <img
            alt='weather icon'
            src={`https://www.weatherbit.io/static/img/icons/${props.weatherObj.data[0].weather.icon}.png`}
          />
        </div>
      )}
      {props.weatherObj?.data && props.type === 'sixteenDays' && (
        <>
          {/* <Temperature
            handleNumberInput={handleInput}
            selectFilter={selectFilter}
            getTemperatures={getFilteredTemps}
          /> */}
          <div> 
          <h3 className='city-style'><strong>{props.weatherObj.city_name}</strong></h3>
          <h3 className='city-style'>{currentDate.toDateString()}</h3>
          </div>
          <div className='weather-list'>
            {dataToRender !== undefined && 
              dataToRender.map((day) =>(
                <dl className='day' key={day.datetime}>
                  <dt>{dateForecast(day.datetime)}</dt>
                  <img
                    alt='weather icon'
                    className='image'
                    src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
                  />
                  <dd> Min: {Math.round(day.min_temp)}°C </dd>
                  <dd> Max {Math.round(day.max_temp)}°C </dd>
                </dl>
              )) }
          </div>
        </>
      )}
    </div>
  )
}
