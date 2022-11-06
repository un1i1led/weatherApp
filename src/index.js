import './style.css';
import makeCall from './modules/getCity';
import initUI from './modules/ui';

const btn = document.querySelector('#btn-search');
const input = document.querySelector('#search');

const getLocation = () => {
  const locationValue = document.querySelector('#search').value;
  return locationValue;
};

async function location() {
  const call = await makeCall(getLocation());
  initUI(call);
}

btn.addEventListener('click', () => {
  if (input.value === '') {
    console.log('nothin to show');
  } else {
    location();
  }
});
