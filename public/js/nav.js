const openNavMenu = () => {
  const openMenuButton = document.getElementById("mobile-open-menu-button");
  const closeMenuButton = document.getElementById("mobile-close-menu-button");
  const navMenu = document.getElementById("mobile-nav-menu");

  openMenuButton.style.display = "none";
  closeMenuButton.style.display = "flex";
  navMenu.style.display = "flex";
};

const closeNavMenu = () => {
  const openMenuButton = document.getElementById("mobile-open-menu-button");
  const closeMenuButton = document.getElementById("mobile-close-menu-button");
  const navMenu = document.getElementById("mobile-nav-menu");

  closeMenuButton.style.display = "none";
  openMenuButton.style.display = "flex";
  navMenu.style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
  const openMenuButton = document.getElementById("mobile-open-menu-button");
  const closeMenuButton = document.getElementById("mobile-close-menu-button");

  openMenuButton.addEventListener("click", openNavMenu);
  closeMenuButton.addEventListener("click", closeNavMenu);
});
