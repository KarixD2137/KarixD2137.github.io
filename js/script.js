
function system_mode() {
  document.documentElement.setAttribute("data-theme", "system");
}

function light_mode() {
  document.documentElement.setAttribute("data-theme", "light");
}

function dark_mode() {
  document.documentElement.setAttribute("data-theme", "dark");
}


/* Disabling animation transitions

  const transitionElements = document.querySelectorAll(".animation-transition");
  transitionElements.forEach(element => {
    element.classList.toggle("animation-transition");
  });



  transitionElements.forEach(element => {
    element.classList.toggle("animation-transition");
  });

*/