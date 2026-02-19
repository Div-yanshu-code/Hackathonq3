/**
 * SkillBridge — script.js
 * Global shared utilities (safe version)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Optional: clear console message
  console.log("SkillBridge loaded");

  // Safety check: ensure backend is reachable (optional debug)
  async function checkBackend() {
    try {
      await fetch("http://localhost:3000");
    } catch (err) {
      console.warn("Backend not reachable");
    }
  }

  // Uncomment if you want backend health check
  // checkBackend();
});