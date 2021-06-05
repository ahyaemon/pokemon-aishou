import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <Router hashType="noslash">
          <div className="App">
              <h1>pokemon aishou</h1>
              <hr/>
              <Link to="/">top</Link>
              <br/>
              <Link to="/about/a">about</Link>
          </div>
          <Switch>
              <Route path="/about/a">about</Route>
              <Route path="/">top</Route>
          </Switch>
      </Router>
  );
}

export default App;
