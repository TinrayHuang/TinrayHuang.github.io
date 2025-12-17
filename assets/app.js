// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("show");
  hamburger.setAttribute("aria-expanded", String(isOpen));
});
mobileMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Active page highlight in nav (matches by filename)
const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
document.querySelectorAll("a[data-page]").forEach(a => {
  const page = (a.getAttribute("data-page") || "").toLowerCase();
  if (page === path) a.classList.add("active");
});

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
