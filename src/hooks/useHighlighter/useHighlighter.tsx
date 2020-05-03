import React from 'react'
import nlp from 'compromise'

export const useHighlighter = (text: string, highlights: string[] = []) => {
  const doc = nlp(text)

  highlights.forEach(highlight => {
    doc.replace(highlight, `<span data-testid="highlight">${highlight}</span>`)
  })

  return (
    <div
      dangerouslySetInnerHTML={{__html: doc.text()}}
    />
  )
}