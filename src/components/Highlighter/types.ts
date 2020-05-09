export interface HighlighterProps {
  text: string;
  highlights: Highlight[];
  onChange?(newText: string): void
}

type Highlight = Word // | [Word, Color]

type Word = string
// type Color = string