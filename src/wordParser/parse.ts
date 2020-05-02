import { Parser } from './types'

export const parse: Parser = text => {
  return {
    raw: text
  }
}