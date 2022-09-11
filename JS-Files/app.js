/* *************************  Dark Mode ************************************* */

const icon = document.getElementById("icon");
const container = document.body;
const alertTheam = document.querySelector("script.thaem");
console.log(alertTheam);
if (localStorage.getItem("data-theme")) {
  container.setAttribute("class", localStorage.getItem("data-theme"));
  toggleDark(1);
}
function toggleDark(r) {
  const dataTheme = container.getAttribute("class");
  let theme_switch;

  if (dataTheme === "light") {
    theme_switch = 1;
  } else {
    theme_switch = 0;
  }
  if (r) {
    theme_switch = !theme_switch;
  }
  if (theme_switch) {
    container.setAttribute("class", "dark");
    icon.setAttribute("src", "./Image/sun.png");
    localStorage.setItem("data-theme", "dark");
  } else {
    container.setAttribute("class", "light");
    icon.setAttribute("src", "./Image/moon.png");
    localStorage.setItem("data-theme", "light");
  }
}
icon.addEventListener("click", () => {
  if (container.classList.contains("light")) {
    alertTheam.setAttribute("src" , "//cdn.jsdelivr.net/npm/sweetalert2@11  ")
  } else {
    alertTheam.setAttribute("src" , "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js")
  }
})

/************************************************************************************* */