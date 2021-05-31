import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './components/StateProvider/StateProvider';

import Header from './components/Header/Header'

function App() {
  return (
    
    <div className="App">
      <Router>
     <Header />
     </Router>
    </div>
    
  );
}

export default App;
