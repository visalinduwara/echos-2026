// ECHOS 2026 - Formspree Registration

const FORMSPREE_URL = "https://formspree.io/f/mnpnvgka";

async function submitRegistration(data) {
  try {
    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return true;
    }

    return false;
  } catch (error) {
    console.error("Registration error:", error);
    return false;
  }
}
