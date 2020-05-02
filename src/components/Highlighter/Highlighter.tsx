import React from 'react'
import { HighlighterProps } from './types'

export const Highlighter: React.FC<HighlighterProps> = props => {
  return <div>{props.text}</div>;
}