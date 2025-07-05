// script.js
document.addEventListener('DOMContentLoaded', () => {
  /* ---------- smooth scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---------- contact‑form validation ---------- */
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name    = form.querySelector('input[type="text"]').value.trim();
      const email   = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {
        alert('Please enter a valid e‑mail.');
        return;
      }
       alert(`Thank you, ${name}! Your message has been sent 👍`);
      form.reset();
    });
  }
});
// nav.js
document.addEventListener("DOMContentLoaded", () => {
  // Grab every link inside <ul class="nav-links">
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();                         // stop normal link jump
      let targetId = link.getAttribute("href");       // "home", "products", …

      // If the author forgot the leading #, add it:
      if (!targetId.startsWith("#")) targetId = "#" + targetId;

      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        // Optional: update the URL hash (nice for bookmarking)
        history.pushState(null, "", targetId);
      }
    });
  });
});
