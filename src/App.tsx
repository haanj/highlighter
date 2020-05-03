import React, { useState } from 'react';

import { Highlighter } from './components';


const App: React.FC = () => {
  const [text, changeText] = useState<string>('');

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = event => {
    changeText(event.currentTarget.value)
  }

  return (
    <div className="App">
      <label>
        Text:
        <textarea onChange={handleChange} />
      </label>
      <Highlighter text={text} />
    </div>
  );
}

export default App;
