import city from './city';

const main = document.querySelector('.main');
const mainSearch = document.querySelector('.search');

const populateLeft = (div, city) => {
  const tempDiv = document.createElement('div');
  tempDiv.className = 'temp-div';

  const tempP = document.createElement('p');
  tempP.className = 'temp-p';
  tempP.innerHTML = `${city.toCelsius(city.temp)} ${city.unit}°`;

  const nameP = document.createElement('p');
  nameP.className = 'name-p';
  nameP.innerHTML = `${city.name}, ${city.country}`;

  tempDiv.appendChild(tempP);
  tempDiv.appendChild(nameP);
  div.appendChild(tempDiv);
};

const populateRight = (div, city, icon) => {
  const imgDiv = document.createElement('div');
  imgDiv.className = 'img-div';

  const descDiv = document.createElement('div');
  descDiv.className = 'desc-div';

  const descP = document.createElement('p');
  descP.className = 'desc-p';
  const descCap = city.description.charAt(0).toUpperCase()
  + city.description.slice(1);
  descP.innerHTML = `${descCap}`;

  imgDiv.appendChild(icon);
  descDiv.append(imgDiv, descP);
  div.appendChild(descDiv);
};

const populateBottom = (div, city) => {
  const bottomDiv = document.createElement('div');
  bottomDiv.className = 'bottom-div';

  const feelsLikeDiv = document.createElement('div');
  feelsLikeDiv.className = 'feels-like-div';
  const feelsLikeHead = document.createElement('p');
  feelsLikeHead.innerHTML = 'Feels like';
  const feelsLikeP = document.createElement('p');
  feelsLikeP.id = 'feels-like-p';
  feelsLikeP.innerHTML = `${city.toCelsius(city.feels)} ${city.unit}°`;

  const humidityDiv = document.createElement('div');
  humidityDiv.className = 'humidity-div';
  const humidityHead = document.createElement('p');
  humidityHead.innerHTML = 'Humidity';
  const humidityP = document.createElement('p');
  humidityP.innerHTML = `${city.humidity}%`;

  const minDiv = document.createElement('div');
  minDiv.className = 'min-div';
  const minHead = document.createElement('p');
  minHead.innerHTML = 'Min temp';
  const minP = document.createElement('p');
  minP.id = 'min-p';
  minP.innerHTML = `${city.toCelsius(city.min)} ${city.unit}°`;

  const maxDiv = document.createElement('div');
  maxDiv.className = 'max-div';
  const maxHead = document.createElement('p');
  maxHead.innerHTML = 'Max temp';
  const maxP = document.createElement('p');
  maxP.id = 'max-p';
  maxP.innerHTML = `${city.toCelsius(city.max)} ${city.unit}°`;

  const windDiv = document.createElement('div');
  windDiv.className = 'wind-div';
  const windHead = document.createElement('p');
  windHead.innerHTML = 'Wind';
  const windP = document.createElement('p');
  windP.innerHTML = `${city.wind} m/s`;

  feelsLikeDiv.append(feelsLikeHead, feelsLikeP);
  humidityDiv.append(humidityHead, humidityP);
  minDiv.append(minHead, minP);
  maxDiv.append(maxHead, maxP);
  windDiv.append(windHead, windP);
  const divs = [feelsLikeDiv, humidityDiv, minDiv, maxDiv, windDiv];
  const headP = [feelsLikeHead, humidityHead, minHead, maxHead, windHead];
  const p = [feelsLikeP, humidityP, minP, maxP, windP];

  for (const x of headP) {
    x.className = 'head-p';
  }

  for (const i of p) {
    i.className = 'bottom-p';
  }

  for (const e of divs) {
    div.appendChild(e);
  }
};

const reAddSearchBar = (mainDiv) => {
  main.removeChild(mainDiv);
  main.appendChild(mainSearch);
};

const changeTempUnit = (city) => {
  const tempP = document.querySelector('.temp-p');
  const feelsLikeP = document.querySelector('#feels-like-p');
  const minP = document.querySelector('#min-p');
  const maxP = document.querySelector('#max-p');

  if (city.unit == 'C') {
    tempP.innerHTML = `${city.toFahr(city.temp)} F°`;
    feelsLikeP.innerHTML = `${city.toFahr(city.feels)} F°`;
    minP.innerHTML = `${city.toFahr(city.min)} F°`;
    maxP.innerHTML = `${city.toFahr(city.max)} F°`;
  } else {
    tempP.innerHTML = `${city.toCelsius(city.temp)} C°`;
    feelsLikeP.innerHTML = `${city.toCelsius(city.feels)} C°`;
    minP.innerHTML = `${city.toCelsius(city.min)} C°`;
    maxP.innerHTML = `${city.toCelsius(city.max)} C°`;
  }
};

async function createDiv(city, icon, backIcon) {
  main.removeChild(mainSearch);
  const mainDiv = document.createElement('div');
  mainDiv.className = 'main-location';

  const topSide = document.createElement('div');
  const leftSide = document.createElement('div');
  const rightSide = document.createElement('div');
  const bottomSide = document.createElement('div');

  const sides = [topSide, bottomSide];

  sides.forEach((elem) => {
    elem.addEventListener('click', () => {
      changeTempUnit(city);
      if (city.unit == 'C') {
        city.unit = 'F';
      } else {
        city.unit = 'C';
      }
    });
  });

  topSide.className = 'top-side';
  leftSide.className = 'left-side';
  rightSide.className = 'right-side';
  bottomSide.className = 'bottom-side';

  populateLeft(leftSide, city);
  populateRight(rightSide, city, icon);
  populateBottom(bottomSide, city);

  backIcon.addEventListener('click', () => {
    reAddSearchBar(mainDiv);
  });

  topSide.appendChild(leftSide);
  topSide.appendChild(rightSide);
  mainDiv.appendChild(topSide);
  mainDiv.appendChild(bottomSide);
  mainDiv.appendChild(backIcon);
  main.appendChild(mainDiv);
}

const initUI = (response, icon, backIcon) => {
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
    'C',
  );
  createDiv(cityObj, icon, backIcon);
};

export default initUI;
