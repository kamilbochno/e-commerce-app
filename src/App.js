import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './components/StateProvider/StateProvider';

import Home from './components/Home/Home';


function App() {
  return (
    
    <div className="App">
      {/* Navbar navigation*/}
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={Home} /> 
     <Route exact path="/contact" component={Home} />
     <Route exact path="/login" component={Home} />
     <Route exact path="/cart"  component={Home}/>
      {/*Footer navigation*/}
     <Route exact path="/links"  component={Home}/>
     <Route exact path="/jobs" component={Home} />
     <Route exact path="/service" component={Home} />
     <Route exact path="/advice" component={Home} />
     <Route exact path="/account" component={Home} />
     <Route exact path="/shipping"  component={Home}/>
     <Route exact path="/terms" component={Home} />
     <Route exact path="/data" component={Home} />
     <Route exact path="/affiliate" component={Home} />
     <Route exact path="/retailers" component={Home} />
                   
    </div>
    
  );
}



export default App; 
