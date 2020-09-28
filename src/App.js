import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar'
import Spacer from './components/spacer'
import About from './components/about'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Spacer />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
