/* eslint-disable arrow-parens */
export const SET_CARS = "SET_CARS";
export const POST_CREATED = "POST_CREATED";

const BASE_URL = "https://wagon-garage-api.herokuapp.com/";

export function fetchCars(garage) {
  const promise = fetch(`${BASE_URL}${garage}/cars`).then((response) =>
    response.json()
  );

  return {
    type: SET_CARS,
    payload: promise,
  };
}

// prettier-ignore
export function createPost(garage, body, callback) {
  console.log(body, garage);
  const request = fetch(`${BASE_URL}${garage}/cars`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
    .then((response) => response.json())
    .then(callback);
  return {
    type: POST_CREATED, // Not used by reducer (we navigate)
    payload: request,
  };
}
