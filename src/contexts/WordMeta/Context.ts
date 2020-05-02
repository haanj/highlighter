import { createContext } from 'react'
import { WordContext, WordMeta } from './types'

export const defaultWordMeta: WordMeta = { raw: '' }

export const Context = createContext<WordContext>({
  words: defaultWordMeta,
  dispatch() {},
})
