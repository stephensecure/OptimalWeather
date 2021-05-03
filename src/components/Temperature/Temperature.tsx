import React from 'react'
import './Temperature.scss'

export const filters = ['min', 'max']

export interface temperatureProps {
  getTemperatures: (e: React.SyntheticEvent<Element, Event>) => void
  handleNumberInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectFilter: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Temperature = (props: temperatureProps) => {

  return (
    <>
      <div className='formstyle'> <h3>Search by temperature:</h3> </div>
      <div className='formstyle'> 
      <div className= "form-group"> 
      <form onSubmit={props.getTemperatures}>
        <label className='field'>
          <span>  Please enter a number: </span> 
          <input
            type='number'
            name='temperature'
            placeholder=''
            onChange={props.handleNumberInput}
          />
        </label>
        {filters?.map((filter) => (
          <label key={filter}>
            <input
              type='radio'
              name='filter'
              value={filter}
              onChange={props.selectFilter}
            />
            {filter}
          </label>
        ))}
      </form>
      </div>
      <div className= "form-group"> 
        <button className='button' type='submit'>Filter </button>
        </div>
      </div>
    </>
  )
}

export default Temperature
