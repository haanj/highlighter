export interface WordMeta {
  raw: string;
}

export interface WordContext {
  words: WordMeta;
  dispatch(action: WordMetaAction): void;
}

export type WordMetaAction = { type: WordMetaActionType, payload: string }

export enum WordMetaActionType {
  UPDATE
}

export type WordMetaReducer = (words: WordMeta, action: WordMetaAction) 
  => WordMeta