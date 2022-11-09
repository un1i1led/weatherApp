async function loadImage(data) {
  const icon = new Image();
  console.log(data.weather[0].icon);
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  console.log(data.weather[0].icon);
  await icon.decode();
  return icon;
}

const checkCityValid = (response, location) => {
  const newName = response.name.toLowerCase();
  const newLocation = location.replace('+', ' ').toLowerCase();
  console.log(newLocation);
  if (newName == newLocation) {
    return true;
  }
  return false;
};

async function makeCall(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8d4bc4545de4700adce2ef463767cc7`);
  const data = await response.json();
  const stuff = checkCityValid(data, location);
  if (stuff) {
    return data;
  }
  return 'Not a valid city';
}

export {
  makeCall,
  loadImage,
};
