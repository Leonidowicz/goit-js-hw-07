"use strict";
const inputRef = document.querySelector("#font-size-control");
const styleRef = document.querySelector("style");

inputRef.addEventListener("input", (event) => {
  let pixels = 25;
  pixels = event.currentTarget.value;
  styleRef.insertAdjacentHTML(
    "beforeend",
    `      span { font-size: ${pixels}px; }`
  );
});
