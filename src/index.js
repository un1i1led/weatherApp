import './style.css';
import { makeCall, loadImage } from './modules/getCity';
import initUI from './modules/ui';

const btn = document.querySelector('#btn-search');
const input = document.querySelector('#search');

const checkSpaces = (string) => string.replace(' ', '+');

const getLocation = () => {
  let locationValue = document.querySelector('#search').value;
  locationValue = (checkSpaces(locationValue));
  console.log(locationValue);
  return locationValue;
};

async function location() {
  const call = await makeCall(getLocation());
  console.log(call);
  const loadIcon = await loadImage(call);
  initUI(call, loadIcon);
}

btn.addEventListener('click', () => {
  if (input.value === '') {
    console.log('nothin to show');
  } else {
    location();
  }
});
