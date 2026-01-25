console.log("JS loaded");

const button = document.querySelector("button");
const input = document.querySelector("input");
const output = document.querySelector("p");

button.addEventListener("click", () => {
  output.textContent = input.value;
});
