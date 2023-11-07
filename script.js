window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const deleteBtn = document.getElementById("delete");
  form.onsubmit = saveInput;
  deleteBtn.onclick = deleteInput;
});

const saveInput = (event) => {
  event.preventDefault();
  const txtInput = document.getElementById("name");
  localStorage.setItem("name", txtInput.value);
  storegedName = localStorage.getItem("name");
  document.getElementById("output").innerText = storegedName;
};
const savedName = localStorage.getItem("name");
if (savedName) {
  document.getElementById("output").innerText = savedName;
}

const deleteInput = (event) => {
  localStorage.removeItem("name");
  let saved = document.getElementById("output");
  if (saved) {
    saved.innerText = "";
  }
};

// Counter

function updateCounter() {
  let seconds = sessionStorage.getItem("timePassed");
  seconds++;
  sessionStorage.setItem("timePassed", seconds);
  document.getElementById("counter").innerText = seconds + " secondi";
}

setInterval(updateCounter, 1000);

updateCounter();
