document.addEventListener("DOMContentLoaded", function () {
  // Set the date we're counting down to
  const countDownDate = new Date("October 31, 2023 00:00:00").getTime();

  // Update the countdown every 1 second
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
    }
  }, 1000);
});

// Add leading zero to numbers less than 10
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
