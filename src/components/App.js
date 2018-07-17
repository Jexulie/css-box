import React  from 'react';

import Main from '../containers/Main';
import Settings from '../containers/Settings';

import '../css/App.css'

const App = props => {
  return (
    <div className="App">
      <Main/>
      <Settings/>
    </div>
  );
}

export default App;