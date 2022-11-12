import './style.css';
import { makeCall, loadImage, loadBackIcon } from './modules/getCity';
import initUI from './modules/ui';

const btn = document.querySelector('#btn-search');
const input = document.querySelector('#search');

const checkSpaces = (string) => string.replace(' ', '+');

const getLocation = () => {
  let locationValue = document.querySelector('#search').value;
  locationValue = (checkSpaces(locationValue));
  return locationValue;
};

async function location() {
  const call = await makeCall(getLocation());
  const loadIcon = await loadImage(call);
  const backIcon = await loadBackIcon();
  initUI(call, loadIcon, backIcon);
}

btn.addEventListener('click', () => {
  if (input.value === '') {
    console.log('nothin to show');
  } else {
    location();
  }
});
