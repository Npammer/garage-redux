/* eslint-disable arrow-parens */
export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";
export const POST_CREATED = "POST_CREATED";
export const CAR_DELETED = "CAR_DELETED";

const BASE_URL = "https://wagon-garage-api.herokuapp.com/";

// INDEX
export function fetchCars(garage) {
  const promise = fetch(`${BASE_URL}${garage}/cars`).then(response =>
    response.json()
  );

  return {
    type: FETCH_CARS,
    payload: promise,
  };
}

// SHOW
export function fetchCar(id) {
  const promise = fetch(`${BASE_URL}/cars/${id}`).then(response =>
    response.json()
  );

  return {
    type: FETCH_CAR,
    payload: promise,
  };
}

// CREATE
export function createCar(garage, body, callback) {
  const request = fetch(`${BASE_URL}${garage}/cars`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(callback);
  return {
    type: POST_CREATED, // Not used by reducer (we navigate)
    payload: request,
  };
}

// DELETE
export function deleteCar(id, callback) {
  const request = fetch(`${BASE_URL}/cars/${id}`, {
    method: "DELETE",
  })
    .then(response => response.json())
    .then(callback);
  return {
    type: CAR_DELETED, // Not used by reducer (we navigate)
    payload: request,
  };
}
