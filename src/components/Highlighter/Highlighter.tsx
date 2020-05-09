import React from 'react'
import { useHighlighter } from 'hooks/useHighlighter'
import { HighlighterProps } from './types'

import './styles.scss'

export const Highlighter: React.FC<HighlighterProps> = ({text, highlights, onChange}) => {
  const rendered = useHighlighter(text, highlights)

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = event => {
    if (onChange) onChange(event.currentTarget.value)
  }

  return <>
    <div 
      className="highlighter"
    >{rendered}</div>
    <label>
      Text:
      <textarea onChange={handleChange} />
    </label>
  </>
}