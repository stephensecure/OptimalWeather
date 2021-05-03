import handleSetState from './handleSetState'

describe('handleSetState()', () => {
  const setState = jest.fn()
  const setError = jest.fn()
  const event = {
    target: { value: 'the-value' },
  } as React.ChangeEvent<HTMLInputElement>

  it("call serError if it is a prop", () => {
    handleSetState(setState)(event)
    expect(setError).not.toHaveBeenCalled()
  })

    it('should call setCity() with selected value in the options', () => {
    handleSetState(setState, setError)(event)
    expect(setState).toHaveBeenCalledWith('the-value')
    expect(setError).toHaveBeenCalledWith(false)
  })
})
