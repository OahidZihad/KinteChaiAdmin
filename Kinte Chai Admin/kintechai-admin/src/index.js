import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import { Provider } from "react-redux";
// import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { blueGrey, lightBlue, green } from "@material-ui/core/colors";
// const Colors = "../constants/Colors";
//import { createstore, applyMiddleware, compose } from "redux";
// import rootReducer from "./Components/Reducers/rootReducer";
//import blue from "@material-ui/core/colors/blue";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createstore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

const myColors = {
  tabIconDefault: "#959292",
  tabBar: "#fefefe",
  errorBackground: "red",
  errorText: "#fff",
  warningBackground: "#EAEB5E",
  warningText: "#666804",
  white: "#ffffff",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[200],
      white: green[50],
    },
    secondary: blueGrey,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
