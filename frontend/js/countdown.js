// Countdown Timer
function countdown() {
  const startTime = new Date('2023-04-04T17:15:00Z').getTime() / 1000;
  const clockdiv = document.getElementById('countdown');

  console.log(clockdiv);

  clockdiv.setAttribute('data-date', startTime);
  const countDownTime = clockdiv.getAttribute('data-date');

  const countdownfunction = setInterval(() => {
    console.log(`countDownTime: ${countDownTime}`);
    const now = new Date().getTime() / 1000;
    console.log(`now: ${now}`);
    const diff = countDownTime - now;
    console.log(`diff: ${diff}`);
    const days = Math.floor(diff / (60 * 60 * 24));
    const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diff % (60 * 60)) / 60);
    const seconds = Math.floor(diff % 60);

    console.log(`days: ${days}`);
    console.log(`hours: ${hours}`);
    console.log(`minutes: ${minutes}`);
    console.log(`seconds: ${seconds}`);

    if (diff < 0) {
      clockdiv.style.display = 'none';
      clearInterval(countdownfunction);
    } else {
      clockdiv.style.display = 'block';
      clockdiv.querySelector('.days').innerHTML = days;
      clockdiv.querySelector('.hours').innerHTML = hours;
      clockdiv.querySelector('.minutes').innerHTML = minutes;
      clockdiv.querySelector('.seconds').innerHTML = seconds;
    }
  }, 1000);
}