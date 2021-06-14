import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './components/StateProvider/StateProvider';

import Home from './components/Home/Home';
import About from './components/About/About';
import Form from './components/Login/Form';
import LoginForm from './components/Login/LoginForm';

function App() {
  
    
  

  return (
    
    <div className="App">
      {/* Navbar navigation*/}
      
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} /> 
     <Route exact path="/contact" component={Home} />
     <Route exact path="/register" component={Form} />
     <Route exact path="/cart"  component={Home}/>
      {/*Register form*/}
     <Route exact path="/login" component={LoginForm} />
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
      {/*Products navigation*/}
     <Route exact path="/telescopes" component={Home} />
     <Route exact path="/mount&acces" component={Home} />
     <Route exact path="/eyepieces" component={Home} />
     <Route exact path="/filters" component={Home} />
     <Route exact path="/accessories" component={Home} />
     <Route exact path="/solar" component={Home} />
     <Route exact path="/astrophotography" component={Home} />
     <Route exact path="/spectroscopy" component={Home} />
     <Route exact path="/observatories" component={Home} />
     <Route exact path="/planetaria" component={Home} />
     <Route exact path="/binoculars" component={Home} />
     <Route exact path="/nature" component={Home} /> 
     <Route exact path="/microscopy" component={Home} />
     <Route exact path="/globes&maps" component={Home} />
     <Route exact path="/tripods" component={Home} />
     <Route exact path="/maintenance" component={Home} />
                   
    </div>
    
  );
}



export default App; 
