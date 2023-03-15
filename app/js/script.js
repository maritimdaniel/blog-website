window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const cookie = document.querySelector(".cookie");
const cookieBtns = document.querySelectorAll(".cookie-btn");

cookieBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    cookie.style.display = "none";
  });
});
