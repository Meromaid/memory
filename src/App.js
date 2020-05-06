import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Index from './pages/Index/index.js'
import New from './pages/New/new.js'
class App extends React.Component {
  
  render(){
      return ( 
          <BrowserRouter>
              <div className="container">
                  <Route path='/' exact component={Index} />
                  <Route path='/new' component={New} />
              </div> 
          </BrowserRouter>
      );
  }
}

export default App;
