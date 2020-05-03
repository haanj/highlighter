import { Parser } from './types'
import nlp from 'compromise'

export const parse: Parser = text => {
  return {
    raw: text,
    common: getCommonWords(text)
  }
}

/**
 * @function getCommonWords
 * @param text - any input string
 * @returns a list of all words, lowercased, that have been repeated 3 or more times
 */
const getCommonWords = (text: string): string[] => {
  const wordCount = new Map<string, number>()

  nlp(text)
    .termList()
    .map(term => term.clean as string)
    .forEach((token: string) => {
      if (!token) return
      const currentCount = wordCount.get(token) || 0
      wordCount.set(token, currentCount + 1)
    })

  return Array
    .from(wordCount.entries())
    .filter(([_word, count]) => count >= 3)
    .map(([word]) => word)
}