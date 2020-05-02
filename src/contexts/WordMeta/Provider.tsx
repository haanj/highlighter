import React, { useReducer } from 'react'
import { Context, defaultWordMeta } from './Context'
import { WordMetaActionType, WordMetaReducer } from './types'

const wordsReducer: WordMetaReducer = (words, action) => {
  if (action.type === WordMetaActionType.UPDATE) {
    return {
      ...words,
      raw: action.payload
    }
  }
  return words
}

export const Provider: React.FC = ({ children }) => {
  const [words, dispatch] = useReducer(wordsReducer, defaultWordMeta)


  const context = {
    words,
    dispatch
  };

  return (
    <Context.Provider
      value={context}
    >
      {children}
    </Context.Provider>
  )
}