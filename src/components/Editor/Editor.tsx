import React, { useState }  from 'react'
import { Highlighter } from 'components'
import { parse } from 'wordParser'

export const Editor: React.FC = () => {
  const [text, changeText] = useState<string>('')

  const { raw, common } = parse(text)

  return <Highlighter 
            text={raw} 
            highlights={common}
            onChange={changeText}
          />

}