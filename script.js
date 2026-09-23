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


// ECHOS 2026 REGISTRATION

const form = document.getElementById("registrationForm");
const success = document.getElementById("success");
const registrationId = document.getElementById("registrationId");

if (form) {

  form.addEventListener("submit", async function(e) {

    e.preventDefault();

    // Generate registration number
    const randomNumber =
      Math.floor(1000 + Math.random() * 9000);

    const regID =
      "ECHOS-2026-" + randomNumber;

    // Collect form data
    const formData = new FormData(form);

    formData.append("Registration ID", regID);
    formData.append("_subject", "New ECHOS 2026 Registration");

    try {

      const response = await fetch(
        "https://formspree.io/f/mnpnvgka",
        {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        }
      );

      if (response.ok) {

        registrationId.innerText = regID;

        form.style.display = "none";
        success.classList.add("show");

        window.scrollTo({
          top: success.offsetTop - 100,
          behavior: "smooth"
        });

      } else {

        alert(
          "Registration failed. Please try again."
        );

      }

    } catch (error) {

      alert(
        "Something went wrong. Please check your internet connection."
      );

      console.error(error);
    }

  });

}
