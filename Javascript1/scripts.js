/*
  Selin Elmas — 09/17/2025
  JavaScript30 - Day 29 Countdown Timer (modified)
  NEW:
    • Plays a ringtone when the timer ends
    • Shows "DONE!" on screen when timer finishes
    • Keeps the page title updated with time left
  Ringtone idea suggested by ChatGPT (OpenAI)
*/

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

// NEW: simple ringtone sound, I chose one that is not traumatizing lol
const finishSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2350/2350-preview.mp3');

function timer(seconds) {
  
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);

      // NEW: play sound when timer finishes
      finishSound.currentTime = 0;
      finishSound.play();

      // NEW: show "DONE!" on screen
      // ORIGINAL:
      // timerDisplay.textContent = '00:00';
      timerDisplay.textContent = 'DONE!';
      endTime.textContent = 'Time is up!';

      // NEW: reset title after finish
      document.title = 'Countdown Timer';
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

  // ORIGINAL:
  // document.title = display;
  // CHANGED: add " left" for clarity
  document.title = display + ' left';

  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;

  // NEW: block empty or negative numbers
  if (mins === '' || isNaN(mins) || mins <= 0) return;

  timer(mins * 60);
  this.reset();
});
