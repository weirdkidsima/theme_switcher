function changeTheme(event) {
    const isDark = event.target.getAttribute("dark-mode") === "true";
  
    document.documentElement.classList.add("color-theme-in-transition");
    window.setTimeout(function () {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
  
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "light");
      event.target.setAttribute("dark-mode", "false");
    } else {
      event.target.setAttribute("dark-mode", "true");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }