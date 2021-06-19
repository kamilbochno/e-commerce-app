import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './components/StateProvider/StateProvider';

import Home from './components/Home/Home';
import About from './components/About/About';
import Form from './components/Login/Form';
import LoginForm from './components/Login/LoginForm';

import Telescopes from './components/Product_categories/Telescopes';
import Mounting from './components/Product_categories/Mounting';
import Eyepieces from './components/Product_categories/Eyepieces';
import Filters from './components/Product_categories/Filters';
import Accessories from './components/Product_categories/Accessories';
import Solar from './components/Product_categories/SolarObservation';
import Spectro from './components/Product_categories/Spectro';
import Observatories from './components/Product_categories/Observatories';
import Planetaria from './components/Product_categories/Planetaria';
import Binoculars from './components/Product_categories/Binoculars';
import Nature from './components/Product_categories/Nature';
import Microscopy from './components/Product_categories/Microscopy';
import Globes from './components/Product_categories/Globes';
import Tripods from './components/Product_categories/Tripods';
import Maintenance from './components/Product_categories/Maintenance';
import Astro from './components/Product_categories/Astro';

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
     <Route exact path="/telescopes" component={Telescopes} />
     <Route exact path="/mountings&accessories" component={Mounting} />
     <Route exact path="/eyepieces" component={Eyepieces} />
     <Route exact path="/filters" component={Filters} />
     <Route exact path="/accessories" component={Accessories} />
     <Route exact path="/solar" component={Solar} />
     <Route exact path="/astrophotography" component={Astro} />
     <Route exact path="/spectroscopy" component={Spectro} />
     <Route exact path="/observatories" component={Observatories} />
     <Route exact path="/planetaria&sundials" component={Planetaria} />
     <Route exact path="/binoculars" component={Binoculars} />
     <Route exact path="/nature" component={Nature} /> 
     <Route exact path="/microscopy" component={Microscopy} />
     <Route exact path="/globes&maps" component={Globes} />
     <Route exact path="/tripods" component={Tripods} />
     <Route exact path="/maintenance&cleaning" component={Maintenance} />
                   
    </div>
    
  );
}



export default App; 
