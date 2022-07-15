const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");

const openNav = (e) => {
  e.preventDefault();
  sidebar.style.transform = "translateX(0)";
  sidebar.style.opacity = "1";
};

const closeNav = (e) => {
  e.preventDefault();
  sidebar.style.transform = "translateX(54rem)";
  sidebar.style.opacity = "0";
};

hamburger.addEventListener("click", openNav);
close.addEventListener("click", closeNav);
