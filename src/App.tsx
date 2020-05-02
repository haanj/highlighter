import React, { useState } from 'react';

import { Highlighter } from './components';


const App: React.FC = () => {
  const [text, changeText] = useState<string>('');

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = event => {
    changeText(event.currentTarget.value)
  }

  return (
    <div className="App">
      <Highlighter text={text} />
      <label>
        Text:
        <textarea onChange={handleChange} />
      </label>
    </div>
  );
}

export default App;
