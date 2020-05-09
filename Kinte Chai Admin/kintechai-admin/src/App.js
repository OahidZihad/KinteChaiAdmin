import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Authenticated from "./Components/Authenticated";
//import { Switch, Route } from "react-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Authenticated>
          <Dashboard />
        </Authenticated>
      </Route>
      <Route exact path="/login">
        <Authenticated nonAuthenticated={true}>
          <Login />
        </Authenticated>
      </Route>
      <Route path="*" render={() => "404 Not Found!"} />
    </Switch>
  );
}

export default App;
