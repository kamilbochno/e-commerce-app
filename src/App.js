import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './components/StateProvider/StateProvider';

import Home from './components/Home/Home';


function App() {
  return (
    
    <div className="App">
      
     <Home /> 
     
      
      
     
     
    </div>
    
  );
}



export default App; 
