window.addEventListener("scroll", () => {
  const mainNav = document.querySelector(".main-header__navbar");
  mainNav.classList.toggle("active", window.scrollY > 0);
});
