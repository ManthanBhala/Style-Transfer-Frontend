import React, { Component } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home'
import AddStyle from './components/AddStyle';
import CustomizedStyle from './components/CustomizedStyle';
import MultipleStyles from './components/MultipleStyles';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/addstyle">
              <AddStyle />
            </Route>
            <Route exact path="/customizedstyle">
              <CustomizedStyle />
            </Route>
            <Route exact path="/multiplestyles">
              <MultipleStyles />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  };
};

export default App;
