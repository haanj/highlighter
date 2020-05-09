import React, { useEffect, useState } from 'react'
import nlp from 'compromise'

import './styles.scss';

export const useHighlighter = (text: string, highlights: string[]) => {
  const [rendered, setRendered] = useState<React.ReactElement>(<>{text}</>)

  useEffect(() => {
    const renderText = () => {
      const terms = nlp(text)
        .termList()
        .map(renderTerm)
      
      return <>{terms}</>
    }

    const renderTerm = (term: nlp.Term) => {
      const displayTerm = highlights.includes(term.clean || '')
        ? <span data-testid="highlight" className="highlight">{term.text}</span>
        : term.text

      return <React.Fragment
          key={term.id}
        >{term.pre}{displayTerm}{term.post}</React.Fragment>
    }

    setRendered(renderText())
  }, [text, highlights])



  return rendered;
}