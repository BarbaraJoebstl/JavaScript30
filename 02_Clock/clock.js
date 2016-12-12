const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  // +90 to offset the 90 degress, because is starts at 12 o'clock
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  const mins = now.getMinutes();
  const minutesDegrees = ((mins / 60 ) * 360) + 90;

  const hourDegrees = ((mins / 12) * 360) + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

}

setInterval(setDate, 1000);
