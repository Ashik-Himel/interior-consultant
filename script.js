const navOpen = document.querySelector(".header-section nav > span");
const navClose = document.querySelector(".header-section ul span");
const navMenu = document.querySelector(".header-section ul");
const navLink = document.querySelectorAll(".header-section ul li a");

navOpen.addEventListener("click", ()=> {
  navMenu.classList.add("active");
})
navClose.addEventListener("click", ()=> {
  navMenu.classList.remove("active");
})
navLink.forEach(n => n.addEventListener("click", ()=> {
  navMenu.classList.remove("active");
}))