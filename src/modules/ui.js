import city from './city';

const body = document.getElementsByTagName('body')[0];
const main = document.querySelector('.main');
const mainSearch = document.querySelector('.search');

const populateLeft = (div, city) => {
  const tempDiv = document.createElement('div');
  tempDiv.className = 'temp-div';

  const tempP = document.createElement('p');
  tempP.innerHTML = `${city.toCelsius(city.temp)}`;

  const nameP = document.createElement('p');
  nameP.innerHTML = `${city.name}, ${city.country}`;

  tempDiv.appendChild(tempP);
  tempDiv.appendChild(nameP);
  div.appendChild(tempDiv);
};

const populateRight = (div, city) => {
  const descDiv = document.createElement('div');
  descDiv.className = 'desc-div';

  const descP = document.createElement('p');
  descP.innerHTML = `${city.description}`;

  descDiv.appendChild(descP);
  div.appendChild(descDiv);
};

const populateBottom = (div, city) => {
  const bottomDiv = document.createElement('div');
  bottomDiv.className = 'bottom-div';

  const feelsLikeDiv = document.createElement('div');
  feelsLikeDiv.className = 'feels-like-div';
  const feelsLikeP = document.createElement('p');
  feelsLikeP.innerHTML = `${city.toCelsius(city.feels)}`;

  const humidityDiv = document.createElement('div');
  humidityDiv.className = 'humidity-div';
  const humidityP = document.createElement('p');
  humidityP.innerHTML = `${city.humidity}%`;

  const minDiv = document.createElement('div');
  minDiv.className = 'min-div';
  const minP = document.createElement('p');
  minP.innerHTML = `${city.toCelsius(city.min)}`;

  const maxDiv = document.createElement('div');
  maxDiv.className = 'max-div';
  const maxP = document.createElement('p');
  maxP.innerHTML = `${city.toCelsius(city.max)}`;

  const windDiv = document.createElement('div');
  windDiv.className = 'wind-div';
  const windP = document.createElement('p');
  windP.innerHTML = `${city.wind} m/s`;

  feelsLikeDiv.appendChild(feelsLikeP);
  humidityDiv.appendChild(humidityP);
  minDiv.appendChild(minP);
  maxDiv.appendChild(maxP);
  windDiv.appendChild(windP);
  const divs = [feelsLikeDiv, humidityDiv, minDiv, maxDiv, windDiv];

  for (const e of divs) {
    div.appendChild(e);
  }
};

const createDiv = (city) => {
  main.removeChild(mainSearch);
  const mainDiv = document.createElement('div');
  mainDiv.className = 'main-location';

  const topSide = document.createElement('div');
  const leftSide = document.createElement('div');
  const rightSide = document.createElement('div');
  const bottomSide = document.createElement('div');

  topSide.className = 'top-side';
  leftSide.className = 'left-side';
  rightSide.className = 'right-side';
  bottomSide.className = 'bottom-side';

  populateLeft(leftSide, city);
  populateRight(rightSide, city);
  populateBottom(bottomSide, city);

  topSide.appendChild(leftSide);
  topSide.appendChild(rightSide);
  mainDiv.appendChild(topSide);
  mainDiv.appendChild(bottomSide);
  main.appendChild(mainDiv);
};

const initUI = (response) => {
  const cityObj = city(
    response.name,
    response.main.temp,
    response.main.feels_like,
    response.weather[0].description,
    response.main.humidity,
    response.main.temp_min,
    response.main.temp_max,
    response.wind.speed,
    response.sys.country,
  );
  createDiv(cityObj);
};

export default initUI;