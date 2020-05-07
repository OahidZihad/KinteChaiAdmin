import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import login from "./Pages/login";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
//import { Switch, BrowseRouter, Route } from "react-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={login} />
        <Route path="*" render={() => "404 Not Found!"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
