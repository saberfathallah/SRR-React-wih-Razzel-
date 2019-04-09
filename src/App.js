import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import Test from './Components/Test';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/test" component={Test} />
  </Switch>
);

export default App;
