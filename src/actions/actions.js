/* eslint-disable arrow-parens */
const BASE_URL = "https://wagon-garage-api.herokuapp.com/";

function fetchCars(garage) {
  const promise = fetch(`${BASE_URL}${garage}/cars`).then((response) =>
    response.json()
  );

  return {
    type: "SET_CARS",
    payload: promise,
  };
}

export { fetchCars };
