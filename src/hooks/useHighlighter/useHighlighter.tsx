import React from 'react'
import nlp from 'compromise'

export const useHighlighter = (text: string, highlights: string[] = []) => {
  const renderText = () => {
    const terms = nlp(text)
      .termList()
      .map(renderTerm)
    
    return <>{terms}</>
  }

  const renderTerm = (term: nlp.Term) => {
    const displayTerm = highlights.includes(term.clean || '')
      ? <span data-testid="highlight">{term.text}</span>
      : term.text

    return <React.Fragment
        key={term.id}
      >{term.pre}{displayTerm}{term.post}</React.Fragment>
  }

  return renderText()
}