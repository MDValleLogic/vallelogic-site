// Tiny demo interactions for the NetRunner dashboard
// Safe to remove later — nothing critical depends on this

(function () {
  const els = document.querySelectorAll("[data-now]");
  els.forEach(el => {
    const d = new Date();
    el.textContent = d.toLocaleString();
  });
})();
