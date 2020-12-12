import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import { Feed } from './Feed';
import { Contact } from './Contact';

function App() {

  return (
    <div className="App">
      {/* NAVBAR */}
      <div className="navbar">
        <ul>
          <li><NavLink to="/feed" activeClassName="current-navlink">Home</NavLink></li>
          <li><NavLink to="/contact" activeClassName="current-navlink">Contact</NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>


        <Redirect to="/feed" />
      </Switch>
    </div>
  );

}




export default App;
