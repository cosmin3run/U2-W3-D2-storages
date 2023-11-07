window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const deleteInput = document.getElementById("delete");
  form.onsubmit = saveInput;
  deleteInput.onclick = () => {
    localStorage.removeItem("name");
  };
});

const saveInput = (event) => {
  event.preventDefault();
  const txtInput = document.getElementById("name");
  localStorage.setItem("name", txtInput.value);
  document.getElementById("output").textContent = localStorage.getItem("name");
};

const savedName = localStorage.getItem("name");
if (savedName) {
  document.getElementById("output").textContent = savedName;
}

// Counter

function updateCounter() {
  let seconds = sessionStorage.getItem("counterSeconds");
  seconds++;
  sessionStorage.setItem("counterSeconds", seconds);
  document.getElementById("counter").textContent = seconds + " secondi";
}

setInterval(updateCounter, 1000);

updateCounter();
