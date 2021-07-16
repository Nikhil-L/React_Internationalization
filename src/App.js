import logo from './logo.svg';
import './App.css';
import {I18Provider, Locales} from "./i18n";
import translate from "./i18n/translate";
import { useState } from 'react';

function App() {

  const [locale, setLocale] = useState(Locales.ENGLISH)
  return (
    <I18Provider locale={locale}>
      <div className="App">
        <header className="App-header">
          {translate('hello')}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {translate('edit', {path: <code>src/App.js</code>})}
            <hr/>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <hr/>
          <button onClick={()=>setLocale(Locales.ENGLISH)}>ENGLISH</button>
          <button onClick={()=>setLocale(Locales.GERMAN)}>GERMAN</button>
          <button onClick={()=>setLocale(Locales.FRENCH)}>FRENCH</button>
        </header>
      </div>
    </I18Provider>
  );
}

export default App;
