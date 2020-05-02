import React, { useContext } from 'react'
import { act, render } from '@testing-library/react'
import { Provider } from './Provider'
import { Context } from './Context'
import { WordContext, WordMetaActionType } from './types'

describe('Smoke test', () => {
  it('should render', () => {
    render(<Provider />)
  })

  it('should render children', () => {
    const text = 'Foo'
    const Child: React.FC = () => <div>{text}</div>
    const { getByText } = render(<Provider><Child/></Provider>)

    const child = getByText(text)
    expect(child).toBeInTheDocument()
  })
})

describe('the provided WordMeta context', () => {
  let context: WordContext | undefined;

  const Test: React.FC = () => {
    context = useContext(Context)
    return <></>
  }

  it('should have a word object with a "raw" attribute containing a string', () => {
    render(<Provider><Test /></Provider>)
    expect(typeof context?.words.raw).toBe('string')
  })

  it('should have a "dispatch" function', () => {
    render(<Provider><Test /></Provider>)
    expect(typeof context?.dispatch).toBe('function')
  })

  it('should update the text attribute when calling the dispatch with a new value', () => {
    const newText = 'Foo'
    render(<Provider><Test /></Provider>)

    expect(context?.words.raw).not.toBe(newText)
    act(() => {
      context?.dispatch({ type: WordMetaActionType.UPDATE, payload: newText})
    })
    expect(context?.words.raw).toBe(newText)
  })
})