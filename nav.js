// nav.js
document.addEventListener("DOMContentLoaded", () => {
  // grab every link inside <ul class="nav‑links">
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();                         // stop normal page jump

      let targetId = link.getAttribute("href");   // e.g. "home" or "#home"

      // if the author forgot the #, add it
      if (!targetId.startsWith("#")) targetId = "#" + targetId;

      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        // optional: update the URL hash (nice for sharing/bookmarks)
        history.replaceState(null, "", targetId);
      }
    });
  });
});
