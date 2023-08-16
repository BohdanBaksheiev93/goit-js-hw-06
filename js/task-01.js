const ulCategories = document.querySelector("#categories");
console.log(ulCategories);
const categoryItems = document.querySelectorAll("li.item");
console.log(categoryItems);
console.log('Number of categories:', categoryItems.length);
categoryItems.forEach(categoryItem => {
    const categoryName = categoryItem.querySelector("h2").textContent;
    const categoryElements = categoryItem.querySelectorAll("li");
    console.log(`\nCategory: ${categoryName}`);
    console.log(`Elements: ${categoryElements.length}`);
});