"use strict";

const category = document.querySelectorAll(".item");
console.log(`В списке ${category.length} категории.`);

const quantityOfcategory = category.forEach((element) =>
  console.log(`\nКатегория: ${element.children[0].textContent}
\nКоличество элементов: ${element.children[1].childElementCount}`)
);
