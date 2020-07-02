const toggleIcon = document.querySelector(".toggle-icon");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

toggleIcon.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
