import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('.date-input');
const startButton = document.querySelector('.start-button');
const timer = document.querySelector('.timer');

startButton.setAttribute('disabled', '');
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(userSelectedDate) {
    const currentDate = Date.now();
    const diff = userSelectedDate[0] - currentDate;
    if (diff < 0) {
      startButton.setAttribute('disabled', '');
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      startButton.removeAttribute('disabled');
    }
    localStorage.setItem('userDate', JSON.stringify(userSelectedDate[0]));
    console.log(userSelectedDate[0]);
  },
};

const fp = flatpickr(input, options);
let intervalId;

startButton.addEventListener('click', () => {
  intervalId = setInterval(() => {
    startButton.setAttribute('disabled', '');
    input.setAttribute('disabled', '');
    const currentDate = Date.now();
    const userDate = Date.parse(JSON.parse(localStorage.getItem('userDate')));
    const diff = userDate - currentDate;
    const time = addLeadingZero(convertMs(diff));
    timer.children[0].firstElementChild.innerHTML = time[0];
    timer.children[1].firstElementChild.innerHTML = time[1];
    timer.children[2].firstElementChild.innerHTML = time[2];
    timer.children[3].firstElementChild.innerHTML = time[3];
    if (diff < 1000) clearInterval(intervalId);
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  return [
    days.toString().padStart(2, '0'),
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ];
}
