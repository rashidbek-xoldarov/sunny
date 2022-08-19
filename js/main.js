const elNavbarBtn = document.querySelector(".navbar-btn");
const elNavbar = document.querySelector(".navbar");

elNavbarBtn.addEventListener("click", function () {
  elNavbar.classList.toggle("navbar-open");
});
