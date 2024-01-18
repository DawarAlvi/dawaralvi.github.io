export const initTheme = () => {
  let isDarkMode: boolean = false;
  const prefersColorScheme = window.matchMedia("(prefers-color-scheme:dark)");
  prefersColorScheme.addEventListener("change", initTheme);

  const LS_DarkMode: string | null = localStorage.getItem("darkmode");
  if (LS_DarkMode === null) {
    if (prefersColorScheme.matches) {
      toggleDarkMode(true);
      isDarkMode = true;
    } else {
      toggleDarkMode(false);
      isDarkMode = false;
    }
  } else {
    if (JSON.parse(LS_DarkMode)) {
      toggleDarkMode(true);
      isDarkMode = true;
    } else {
      toggleDarkMode(false);
      isDarkMode = false;
    }
  }
  return {
    isDarkMode: isDarkMode,
    cleanup: () => {
      prefersColorScheme.removeEventListener("change", initTheme);
    },
  };
};

export const toggleDarkMode = (value?: boolean) => {
  let isDarkMode: boolean = value || false;
  if (value === undefined) {
    document.documentElement.classList.toggle("darkmode");
    isDarkMode = document.documentElement.classList.contains("darkmode");
    localStorage.setItem("darkmode", JSON.stringify(isDarkMode));
  } else {
    value
      ? document.documentElement.classList.add("darkmode")
      : document.documentElement.classList.remove("darkmode");
  }
  return { isDarkMode: isDarkMode };
};
