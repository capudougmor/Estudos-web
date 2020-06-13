function showMenu() {
  document
    .querySelectorAll(".menuElement")
    .addEventListener("click", function() {
      document
        .querySelector(".menuItem")
        .classList
        .toggle("hide")
    })
}

showMenu()
