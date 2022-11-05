const checkCityValid = (response, location) => {
  if (location.length == response[0].name.length) {
    console.log(response);
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
