/* eslint-disable arrow-parens */
const BASE_URL = "https://wagon-garage-api.herokuapp.com/";

function fetchCars(garage) {
  const promise = fetch(`${BASE_URL}${garage}/cars`).then((response) =>
    response.json()
  );
  console.log(promise);

  return {
    type: "SET_CARS",
    payload: promise,
  };
}

export { fetchCars };
