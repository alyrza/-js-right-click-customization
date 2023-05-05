const myContextMenu = document.querySelector("#myContextMenu");
const copyTextBtn = document.querySelector("#copyTextBtn");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  myContextMenu.style.left = event.pageX + "px";
  myContextMenu.style.top = event.pageY + "px";

  if (window.innerWidth - 300 < event.pageX) {
    myContextMenu.style.left = event.pageX - 150 + "px";
  }
  if (window.innerHeight - 300 < event.pageY) {
    myContextMenu.style.top = event.pageY - 270 + "px";
  }

  myContextMenu.classList.add("show");

  let selection = window.getSelection();

  if (selection.isCollapsed) {
    copyTextBtn.classList.add("hide");
  }else{
    copyTextBtn.classList.remove("hide");
  }
});

document.addEventListener("click", (event) => {
  myContextMenu.classList.remove("show");
});

const CopySelectedText = async (event) => {
  // Prevent page refresh
  event.preventDefault();

  let text = selection.toString();

  try {
    await navigator.clipboard.writeText(text);
    // success
    showAlert("Copied!");
  } catch (err) {
    // error
  }
};
