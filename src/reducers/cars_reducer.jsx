import { FETCH_CARS, FETCH_CAR } from "../actions/actions";

export default function carsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CARS: {
      return action.payload;
    }
    case FETCH_CAR: {
      return [action.payload];
    }
    default:
      return state;
  }
}
