// ECHOS 2026 - Registration Email System

const FORMSPREE_URL = "https://formspree.io/f/mnpnvgka";

const registrationForm =
  document.getElementById("registrationForm");

if (registrationForm) {

  registrationForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    // Get values directly from the existing form
    const name =
      document.getElementById("name")?.value || "";

    const nickname =
      document.getElementById("nickname")?.value || "";

    const phone =
      document.getElementById("phone")?.value || "";

    const batch =
      document.getElementById("batch")?.value || "";

    const note =
      document.getElementById("note")?.value || "";

    const attendance =
      document.querySelector(
        'input[name="attendance"]:checked'
      )?.value || "";

    // Generate registration ID
    const randomNumber =
      Math.floor(1000 + Math.random() * 9000);

    const regID =
      "ECHOS-2026-" + randomNumber;

    // Prepare email data
    const data = new FormData();

    data.append("Registration ID", regID);
    data.append("Full Name", name);
    data.append("Nickname", nickname);
    data.append("Phone Number", phone);
    data.append("Batch", batch);
    data.append("Attendance", attendance);
    data.append("Special Note", note);

    data.append(
      "_subject",
      "🎟️ New ECHOS 2026 Registration - " + regID
    );

    try {

      const response = await fetch(
        FORMSPREE_URL,
        {
          method: "POST",
          body: data,
          headers: {
            "Accept": "application/json"
          }
        }
      );

      if (response.ok) {

        document.getElementById(
          "registrationId"
        ).innerText = regID;

        registrationForm.style.display = "none";

        document
          .getElementById("success")
          .classList.add("show");

        window.scrollTo({
          top:
            document.getElementById("success")
              .offsetTop - 100,
          behavior: "smooth"
        });

      } else {

        alert(
          "Registration failed. Please try again."
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Something went wrong. Please check your internet connection."
      );

    }

  });

}
