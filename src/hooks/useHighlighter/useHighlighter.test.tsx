import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { useHighlighter } from './useHighlighter'

test('hook takes input text and returns jsx for it', () => {
  const text = "Hello, world"
  const { result } = renderHook(() => useHighlighter(text))
  const { getByText }  = render(result.current)
  expect(getByText(text)).toBeInTheDocument()
})

test('words marked for highlighting get put into highlighter element', () => {
  const text = "Hello, words. Are you ready to Highlight these words?"
  const highlights = ['words', 'highlight']

  const { result } = renderHook(() => useHighlighter(text, highlights))
  const { getAllByTestId, baseElement } = render(result.current)

  expect(getAllByTestId('highlight').length).toBe(3)
  expect(baseElement.textContent).toBe(text)
})