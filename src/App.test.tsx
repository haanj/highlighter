import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('renders text box', () => {
  const { getByLabelText } = render(<App />)
  const input = getByLabelText('Text:')
  expect(input).toBeInTheDocument()
})

test('use can type using text box', () => {
  const { getByLabelText, getByText } = render(<App />)
  const text = 'Foo'
  const input = getByLabelText('Text:')
  userEvent.type(input, text)

  const texts = getByText(text)
  expect(texts).toBeInTheDocument()
})



