import './style.css';
import { makeCall, loadImage, loadBackIcon } from './modules/getCity';
import initUI from './modules/ui';

const btn = document.querySelector('.search-btn');
const input = document.querySelector('#search-input');

const checkSpaces = (string) => string.replace(' ', '+');

const getLocation = () => {
  let locationValue = document.querySelector('#search-input').value;
  locationValue = (checkSpaces(locationValue));
  return locationValue;
};

async function location() {
  const call = await makeCall(getLocation());
  const loadIcon = await loadImage(call);
  const backIcon = await loadBackIcon();
  input.value = '';
  initUI(call, loadIcon, backIcon);
}

document.getElementById('form').addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    e.preventDefault();
    if (input.value != '') {
      location();
    }
  }
});

btn.addEventListener('click', () => {
  if (input.value != '') {
    location();
  }
});
