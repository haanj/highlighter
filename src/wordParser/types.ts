export interface WordMeta {
  raw: string;
}

export type Parser = (text: string) => WordMeta