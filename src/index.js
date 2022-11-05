import './style.css';
import makeCall from './modules/getPlace';

const btn = document.querySelector('#btn-search');
const input = document.querySelector('#search');

const getLocation = () => {
  const location = document.querySelector('#search').value;
  return location;
};

btn.addEventListener('click', () => {
  if (input.value === '') {
    console.log('nothin to show');
  } else {
    makeCall(getLocation());
  }
});
