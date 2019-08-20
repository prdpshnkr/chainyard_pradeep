import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import SingleBlock from './containers/Block/SingleBlock'
import './App.css';
import LastBlock from './containers/Block/LastBlock';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Browse BlockChain Data</h1>
        <button><NavLink style={{ textDecoration: 'none', color: 'gray' }} to="/single">Get Block Data</NavLink></button>
        <button><NavLink style={{ textDecoration: 'none', color: 'gray' }} to="/last">Last Block Data</NavLink></button>
        <Switch>
          <Route exact path="/single" component={SingleBlock} />
          <Route exact path="/last" component={LastBlock} />
        </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;
