import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createHistory as history } from "history";

// Reducers
import carsReducer from "./reducers/cars_reducer";

// Components
import CarsIndex from "./containers/cars_index";

import "../assets/stylesheets/application.scss";

const garageName = `garage${Math.floor(10 + Math.random() * 90)}`; //TODO prompt("What is your garage?") ||
const initialState = {
  garage: garageName,
  cars: [],
};

const reducers = combineReducers({
  // eslint-disable-next-line no-unused-vars
  garage: (state = null, action) => state,
  cars: carsReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// TODO <Redirect from="/" to="/general" />
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:garage" component={CarsIndex} />
        <Route path="/:garage/new" component={CarsNew} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
