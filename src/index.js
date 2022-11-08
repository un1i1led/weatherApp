import './style.css';
import { makeCall, loadImage } from './modules/getCity';
import initUI from './modules/ui';

const btn = document.querySelector('#btn-search');
const input = document.querySelector('#search');

const getLocation = () => {
  const locationValue = document.querySelector('#search').value;
  return locationValue;
};

async function location() {
  const call = await makeCall(getLocation());
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
