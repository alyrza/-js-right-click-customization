const myContextMenu = document.querySelector("#myContextMenu");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  myContextMenu.style.left = event.pageX + "px";
  myContextMenu.style.top = event.pageY + "px";
  myContextMenu.classList.add("show");
});

document.addEventListener("click", (event) => {
  myContextMenu.classList.remove("show");
});
