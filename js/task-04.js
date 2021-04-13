"use strict";
const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');
const counterValueRef = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};
incrementRef.addEventListener("click", increment);
decrementRef.addEventListener("click", decrement);
