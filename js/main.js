// Rocky Mountain Logic v1
// Minimal, unobtrusive behavior only.

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for in-page navigation --------------------------------
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();

      // Ensure section can receive focus for keyboard users
      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.focus({ preventScroll: true });
    });
  });

  // Contact form handling ---------------------------------------------------
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Basic client-side check for required fields
      const nameInput = contactForm.querySelector("#name");
      const emailInput = contactForm.querySelector("#email");
      const messageInput = contactForm.querySelector("#message");

      const requiredMissing =
        !nameInput.value.trim() ||
        !emailInput.value.trim() ||
        !messageInput.value.trim();

      if (requiredMissing) {
        if (formStatus) {
          formStatus.textContent =
            "Please fill in the required fields (Name, Email, and How can we help?).";
        }
        return;
      }

      // Placeholder behavior for v1 (no backend yet)
      if (formStatus) {
        formStatus.textContent =
          "Thanks for reaching out. This is a demo endpoint in v1. In production, your request will be sent securely to Rocky Mountain Logic.";
      }

      // Optional: reset the form so users know it "went through"
      contactForm.reset();

      console.info(
        "[RML] Contact form submitted (demo only). Wire this up to your form service or backend."
      );
    });
  }

  // Footer year helper ------------------------------------------------------
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // FUTURE INTEGRATIONS -----------------------------------------------------
  // TODO: AI chat widget mount point
  // const chatContainer = document.getElementById("rml-chat");
  // if (chatContainer) {
  //   // Initialize LLM-based assistant here.
  // }

  // TODO: Intake notebook / wizard entry point
  // Button in hero or KB can mount a SPA or modal-driven flow here.
});
