document.addEventListener("DOMContentLoaded", () => {
  // Set footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Light feedback for the contact form.
  // IMPORTANT: Do NOT call preventDefault here, so the mailto: action still runs.
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", () => {
      status.textContent =
        "Your email app will open with your message addressed to Rocky Mountain Logic.";
    });
  }
});
