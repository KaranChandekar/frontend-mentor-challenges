const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

$(document).ready(function () {
  AOS.init({
    easing: "ease-in-quad",
  });
});
