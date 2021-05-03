import React from 'react'
import { shallow } from 'enzyme'
import Temperature from './Temperature'

describe('Temperature', () => {
  it('should render with props', () => {
    const minProps = {
      getTemperatures: jest.fn(() => {}),
      handleNumberInput: jest.fn(() => {}),
      selectFilter: jest.fn(() => {}),
    }
    const wrapper = shallow(<Temperature {...minProps} />)
    expect(wrapper.find('form').length).toBe(1)
  })
})
