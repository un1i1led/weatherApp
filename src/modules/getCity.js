async function getWeather(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d8d4bc4545de4700adce2ef463767cc7`, { mode: 'cors' });
  const data = await response.json();
  return data;
}

async function loadImage(data) {
  const icon = new Image();
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  console.log(data.weather[0].icon);
  await icon.decode();
  return icon;
}

const checkCityValid = (response, location) => {
  if (location.length == response[0].name.length) {
    return getWeather(response[0].lat, response[0].lon);
  }
  return 'Not a valid city';
};

async function makeCall(location) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=d8d4bc4545de4700adce2ef463767cc7`);
  const data = await response.json();
  const stuff = await checkCityValid(data, location);
  return stuff;
}

export {
  makeCall,
  loadImage,
};
