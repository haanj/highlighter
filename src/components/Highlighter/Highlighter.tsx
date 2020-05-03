import React from 'react'
import { parse } from '../../wordParser';
import { HighlighterProps } from './types'

export const Highlighter: React.FC<HighlighterProps> = ({text}) => {
  const { raw, common } = parse(text);

  const renderCommon = () => {
    return common
      .map(word => <div key={word}>{word}</div>)
  }

  return <>
    <div>common: {renderCommon()}</div>
    <div>{raw}</div>;
  </>
}