const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.createElement("ul");

ingredients.forEach(ingredient => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  ulList.appendChild(liEl);
});

const ingrClass = document.querySelector("#ingredients");
ingrClass.insertAdjacentElement("afterend", ulList);

console.log(ulList);