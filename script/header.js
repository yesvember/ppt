// header script
const menuBtn = document.querySelector(".header__menu-m");
const menuBtnClose = document.querySelector(".header__menu-close");
const mobileMenu = document.querySelector(".menu__m");
const mobileMenuList = mobileMenu.querySelectorAll(".menu__m-list");
const ACTIVE = "active";

const menuOpen = () => {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle(ACTIVE);
  });

  mobileMenuList.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove(ACTIVE);
    });
  });

  menuBtnClose.addEventListener('click', () => {
    mobileMenu.classList.remove(ACTIVE);
  })
};
menuOpen();

window.addEventListener("resize", () => {
  let windowWidth = window.innerWidth;
  if (windowWidth >= 1024 || mobileMenu.classList.contains(ACTIVE)) {
    mobileMenu.classList.remove(ACTIVE);
  }
});
