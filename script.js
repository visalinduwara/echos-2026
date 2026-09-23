// ECHOS 2026 COUNTDOWN

const eventDate = new Date("November 29, 2026 10:30:00").getTime();

function updateCountdown() {

  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById("days").innerText =
    String(days).padStart(2, "0");

  document.getElementById("hours").innerText =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").innerText =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").innerText =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


// REGISTRATION

const form = document.getElementById("registrationForm");
const success = document.getElementById("success");
const registrationId = document.getElementById("registrationId");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  registrationId.innerText =
    "ECHOS-2026-" + randomNumber;

  form.style.display = "none";
  success.classList.add("show");

  window.scrollTo({
    top: success.offsetTop - 100,
    behavior: "smooth"
  });

});
