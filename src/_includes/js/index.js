function toggleNavMenu(e) {
  e.stopPropagation();
  const navMenu = document.querySelector(".nav-menu");
  if (navMenu.classList.contains("fade-nav-menu")) {
    navMenu.classList.toggle("fade-nav-menu");
    setTimeout(() => {
      navMenu.classList.toggle("show-nav-menu");
    },200);
  }
  else {
    navMenu.classList.toggle("show-nav-menu");
    setTimeout(() => {
      navMenu.classList.toggle("fade-nav-menu");
    },0);
  }
}

function handleExploreClick() {
  document.querySelector(".section-blog-list")?.scrollIntoView?.();
}

function handleThemeButtonClick() {
  const element = document.querySelector("html");
  element.dataset.theme = element.dataset.theme === "dark" ? "light" : "dark";
  setThemeIcons();
  localStorage.setItem("theme", element.dataset.theme);
}

function setThemeIcons() {
  if (document.querySelector("html").dataset.theme === "dark") {
    document.querySelector(".light-theme-icon")?.classList.add("hidden");
    document.querySelector(".dark-theme-icon")?.classList.remove("hidden");
  }
  else {
    document.querySelector(".light-theme-icon")?.classList.remove("hidden");
    document.querySelector(".dark-theme-icon")?.classList.add("hidden");
  }
}

function initTheme() {
    const localThemeValue = localStorage.getItem("theme");
    if (localThemeValue) {
      const element = document.querySelector("html");
      element.dataset.theme = localThemeValue;
      setThemeIcons();
    }
}

function init() {
  initTheme();
}
init();
