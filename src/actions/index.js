// TODO: add and export your own actions
export const FETCH_CARS = "FETCH_CARS";
export const CREATE_CAR = "CREATE_CAR";

export function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`).then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(garage, body, callback) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);
  return {
    type: CREATE_CAR,
    payload: promise
  };
}

