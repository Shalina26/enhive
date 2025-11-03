const openNavMenu = (openMenuButton, closeMenuButton, navMenu) => {
  openMenuButton.style.display = "none";
  closeMenuButton.style.display = "flex";
  navMenu.style.display = "flex";
};

const closeNavMenu = (openMenuButton, closeMenuButton, navMenu) => {
  closeMenuButton.style.display = "none";
  openMenuButton.style.display = "flex";
  navMenu.style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
  const openMenuButton = document.getElementById("mobile-open-menu-button");
  const closeMenuButton = document.getElementById("mobile-close-menu-button");
  const navMenu = document.getElementById("mobile-nav-menu");

  openMenuButton.addEventListener("click", () =>
    openNavMenu(openMenuButton, closeMenuButton, navMenu)
  );
  closeMenuButton.addEventListener("click", () =>
    closeNavMenu(openMenuButton, closeMenuButton, navMenu)
  );
});
