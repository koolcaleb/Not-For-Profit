// Countdown Timer
function countdown() {
  const startTime = "2023-04-06T11:30:48Z";
  const clockdiv = document.getElementById("countdown");
  clockdiv.setAttribute("data-date", startTime);
  const countDownTime = clockdiv.getAttribute("data-date") * 1000;
  console.log(countDownTime);

  const countdownfunction = setInterval(function () {
    const now = new Date().getTime();
    const diff = countDownTime - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (diff < 0) {
      clockdiv.style.display = "none";
      clearInterval(countdownfunction);
    } else {
      clockdiv.style.display = "block";
      clockdiv.querySelector(".days").innerHTML = days;
      clockdiv.querySelector(".hours").innerHTML = hours;
      clockdiv.querySelector(".minutes").innerHTML = minutes;
      clockdiv.querySelector(".seconds").innerHTML = seconds;
    }
  }, 1000);
}
