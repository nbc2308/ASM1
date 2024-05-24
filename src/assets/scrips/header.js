document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu ul");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
