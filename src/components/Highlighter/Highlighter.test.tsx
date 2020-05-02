import React from 'react'
import { render } from '@testing-library/react'
import { Highlighter } from './Highlighter'

describe('Smoke test', () => {
  it('should be component that renders text passed in', () => {
    const text = 'foo'
    const { getByText } = render(<Highlighter text={text} />)
    expect(getByText(text)).toBeInTheDocument()
  })
})