import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './components/StateProvider/StateProvider';

import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    
    <div className="App">
      <Router>
     <Header />
     <Searchbar />
     <Products />
     </Router>
    </div>
    
  );
}

export default App;
