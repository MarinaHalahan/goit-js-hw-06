const categoriesListRef = document.querySelector('ul');

const categoriesItem = categoriesListRef.children;
console.log(`Number of categories: ${categoriesItem.length}`);

// ===================

const categoriesItemRef = document.querySelectorAll('.item');

categoriesItemRef.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
   
});




