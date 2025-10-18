// Search toggle - display only the icon
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    if (shortcutKeyElement) {
      // Display only the search icon
      shortcutKeyElement.innerHTML = '<i class="ti ti-search"></i>';
    }
  }
});
