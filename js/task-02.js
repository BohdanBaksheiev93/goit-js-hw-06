const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  ulList.appendChild(liEl);
});
