import back from '../img/back1.png';

async function loadImage(data) {
  const icon = new Image();
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  await icon.decode();
  return icon;
}

async function loadBackIcon() {
  const backIcon = new Image();
  backIcon.src = back;
  backIcon.className = 'back-icon';
  await backIcon.decode();
  return backIcon;
}

const checkCityValid = (response, location) => {
  const normalized = response.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const newName = normalized.toLowerCase();
  const newLocation = location.replace('+', ' ').toLowerCase();
  if (newName == newLocation) {
    return true;
  }
  return false;
};

async function makeCall(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8d4bc4545de4700adce2ef463767cc7&units=metric`);
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
  loadBackIcon,
};
