const nameInput = document.getElementById("name");

let userName = localStorage.getItem("name");
const prevName = document.querySelector("p");

if (userName) {
  prevName.innerText = userName;
}

const saveBtn = document.getElementById("saveInLocal");

saveBtn.addEventListener("click", () => {
  userName = nameInput.value;
  prevName.innerText = userName;
  localStorage.setItem("name", userName);
});

const removeBtn = document.getElementById("removeFromLocal");

removeBtn.addEventListener("click", () => {
  prevName.innerText = "";
  localStorage.removeItem("name");
});

let elapsedTime = parseInt(sessionStorage.getItem("elapsed"));
if (!elapsedTime) {
  elapsedTime = 0;
}

setInterval(() => {
  elapsedTime++;
  sessionStorage.setItem("elapsed", elapsedTime);
}, 1000);
