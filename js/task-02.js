const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulList = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  fragment.appendChild(liEl);
});

ulList.appendChild(fragment);
