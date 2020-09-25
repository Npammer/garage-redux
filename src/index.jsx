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
import CarsIndex from "./components/cars_index";

import "../assets/stylesheets/application.scss";

const garageName = `garage${Math.floor(10 + Math.random() * 90)}`; //TODO prompt("What is your garage?") ||
const initialState = {
  garage: garageName,
  cars: [
    // TODO remove initial state
    {
      id: 1,
      brand: "Peugeot",
      model: "106",
      owner: "John",
      plate: "WOB-ED-42",
    },
    {
      id: 2,
      brand: "Renault",
      model: "Scenic",
      owner: "Paul",
      plate: "AAA-12-BC",
    },
    {
      id: 3,
      brand: "Aston Martin",
      model: "DB Mark III",
      owner: "James",
      plate: "418-ED-94",
    },
    {
      id: 4,
      brand: "VW",
      model: "Beetle",
      owner: "George",
      plate: "1234-XD-75",
    },
  ],
};

const reducers = combineReducers({
  // eslint-disable-next-line no-unused-vars
  garage: (state = null, action) => state,
  cars: carsReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:garage" component={CarsIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
