import React from 'react'
import nlp from 'compromise'

export const useHighlighter = (text: string, highlights: string[] = []) => {
  const highlighted = new Set(highlights)

  const doc = nlp(text)

  const renderText = () => {
    const children: React.ReactElement[] = []

    const renderTerm = (term: nlp.Term) => {
      const displayTerm = highlighted.has(term.clean || '')
        ? <span data-testid="highlight">{term.text}</span>
        : term.text
      children.push((
        <React.Fragment
          key={term.id}
        >{term.pre}{displayTerm}{term.post}</React.Fragment>
      ))
    }

    doc
      .termList()
      .forEach(renderTerm)

    return children
  }

  return <>{renderText()}</>
}