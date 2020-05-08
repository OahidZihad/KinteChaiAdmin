import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import login from "./Pages/login";
import { Switch, Route } from "react-router-dom";
//import { Switch, Route } from "react-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        dashboard
      </Route>
      <Route exact path="/login" component={login} />
      <Route path="*" render={() => "404 Not Found!"} />
    </Switch>
  );
}

export default App;
