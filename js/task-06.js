"use strict";

const inputRef = document.querySelector("#validation-input");
const dataRef = +inputRef.dataset.length;

const onBlur = (event) => {
  const inputLength = event.currentTarget.value.length;

  if (dataRef === inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", onBlur);
