function onOff() {
  document
  .querySelector(".menuElement")//procura um elemento
  .classList//adiciona uma class
  .toggle("hide")//alterna entre os estilos

  document
  .querySelector("body")
  .classList
  .toggle("hideScroll")

  document
  .querySelector("#modal")
  .classList
  .toggle("addScroll")
}

function click() {
  document.addEventListener('click', onOff())
}