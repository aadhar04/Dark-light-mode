const btn = document.querySelector(".btn");
const text = document.querySelector(".title");

let dark = 1;

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (dark) {
    text.innerHTML = "Click to on light mode.";
    dark = 0;
  } else {
    text.innerHTML = "Click to on dark mode.";
    dark = 1;
  }
});
