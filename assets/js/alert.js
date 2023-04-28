function showAlert(text) {
  var alertBox = document.createElement("div");
  alertBox.innerHTML = text;
  alertBox.style.position = "fixed";
  alertBox.style.top = "50%";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translate(-50%, -50%)";
  alertBox.style.backgroundColor = "#fff";
  alertBox.style.padding = "20px";
  alertBox.style.borderRadius = "10px";
  alertBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  alertBox.style.opacity = "0";
  alertBox.style.transition = "opacity 0.5s ease";

  document.body.appendChild(alertBox);

  setTimeout(function () {
    alertBox.style.opacity = "1";
  }, 100);

  setTimeout(function () {
    alertBox.style.opacity = "0";
    setTimeout(function () {
      alertBox.parentNode.removeChild(alertBox);
    }, 500);
  }, 3000);
}
