<script setup>
document.body.className = 'start';

// document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  const countDownDate = new Date('October 30, 2023 00:00:00').getTime()

  // Update the countdown every 1 second
  const x = setInterval(function () {
    const now = new Date().getTime()
    const distance = countDownDate - now

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display the countdown
    document.getElementById('days').innerText = formatTime(days)
    document.getElementById('hours').innerText = formatTime(hours)
    document.getElementById('minutes').innerText = formatTime(minutes)
    document.getElementById('seconds').innerText = formatTime(seconds)

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x)
      document.getElementById('days').innerText = '00'
      document.getElementById('hours').innerText = '00'
      document.getElementById('minutes').innerText = '00'
      document.getElementById('seconds').innerText = '00'
    }
  }, 1000)
// })

// Add leading zero to numbers less than 10
function formatTime(time) {
  return time < 10 ? '0' + time : time
}
</script>
<template>
  <div class="countdown-container">
    <div class="countdown-item">
      <span id="days">00</span>
      <p>Tage</p>
    </div>
    <div class="countdown-item">
      <span id="hours">00</span>
      <p>Stunden</p>
    </div>
    <div class="countdown-item">
      <span id="minutes">00</span>
      <p>Minuten</p>
    </div>
    <div class="countdown-item">
      <span id="seconds">00</span>
      <p>Sekunden</p>
    </div>
  </div>
</template>

<style>
@keyframes pulse {
  0% {
    background-color: #f0e6f6;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    transform: scale(1) rotate(0);
  }
  25% {
    background-color: #ffffff;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
    transform: scale(1.03) rotate(3deg);
  }
  50% {
    background-color: #f0e6f6;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    transform: scale(1) rotate(0);
  }
  75% {
    background-color: #ffffff;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
    transform: scale(1.03) rotate(-3deg);
  }
  100% {
    background-color: #f0e6f6;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    transform: scale(1) rotate(0);
  }
}

@keyframes dim {
  0%,
  100% {
    background-color: #fba6d9;
  }
  50% {
    background-color: #fc91d1;
  }
}

body.start {
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  animation: dim 1s infinite;
}

.countdown-container {
  display: flex;
  justify-content: space-around;
  width: 250px;
  padding: 20px;
  border-radius: 10px;
  animation: pulse 2s ease-in-out infinite;

  @media (min-width: 600px) {
    width: 440px;
  }

  @media (min-width: 1024px) {
    width: 630px;
  }
}

.countdown-item {
  text-align: center;
  margin-right: 1rem;
  font-family: 'Young Serif', serif;
}

.countdown-item span {
  display: block;
  font-size: 2em;
  color: #ff80cc;

  @media (min-width: 600px) {
    font-size: 3em;
  }

  @media (min-width: 1024px) {
    font-size: 6em;
  }
}

body.start p {
  margin: 5px 0;
  color: #4d4dff;
  font-size: 12px;

  @media (min-width: 600px) {
    font-size: unset;
  }
}
</style>
