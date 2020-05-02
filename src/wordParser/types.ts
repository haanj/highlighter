export interface WordMeta {
  raw: string;
  common: string[];
}

export type Parser = (text: string) => WordMeta