import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { LocationMap } from './LocationMap';

const location = {
    address: 'Auckland',
    lat: -36.84846,
    lng: 174.763332,
};
const zoomLevel = 11;

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <section>
        <LocationMap
            location={location}
            zoomLevel={zoomLevel}>
        </LocationMap>
      </section>
    </div>
  );
}

export default App;
