import React from 'react';
import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Top} from "./pages/Top";

function App() {
  return (
      <Router hashType="noslash">
          <Switch>
              <Route path="/about/a">about</Route>
              <Route path="/"><Top/></Route>
          </Switch>
      </Router>
  );
}

export default App;
