"use strict";

const ingRef = document.querySelector("#ingredients");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createNewEl = ingredients.map((item) => {
  const newEl = document.createElement("li");
  newEl.textContent = item;
  return newEl;
  //
});
ingRef.append(...createNewEl);
