const getWeather = (lat, lon) => {
  const call = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d8d4bc4545de4700adce2ef463767cc7`;
  fetch(call, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });
};

const checkCityValid = (response, location) => {
  if (location.length == response[0].name.length) {
    getWeather(response[0].lat, response[0].lon);
  } else {
    console.log('Not a valid city');
  }
};

const makeCall = (location) => {
  const call = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=d8d4bc4545de4700adce2ef463767cc7`;

  fetch(call, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      checkCityValid(response, location);
    });
};

export default makeCall;
