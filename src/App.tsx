import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import 'wc-example';
import logo from './logo.svg';
import './App.css';

const App: FC = () => {
  const helloWorldEl = useRef<HTMLElement>(null);
  const [value, setValue] = useState(0);
  const handleIncrement = useCallback(() => {
    const newValue = value + 1;
    setValue(newValue);
  }, [setValue, value]);
  useEffect(() => {
    const element = helloWorldEl.current;
    if (element === null) {
      return;
    }
    element.addEventListener('increment', handleIncrement);
    return () => {
      element.removeEventListener('increment', handleIncrement);
    }
  }, [handleIncrement]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>Hello World</div>
        <hello-world
          color="purple"
          ref={helloWorldEl}
          value={value.toString()}
         />
      </header>
    </div>
  );
}

export default App;
