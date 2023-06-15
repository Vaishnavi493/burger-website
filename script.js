// Get the necessary elements from the DOM
const ingredientCheckboxes = document.querySelectorAll('input[name="ingredient"]');
const createBurgerBtn = document.getElementById('createBurgerBtn');
const burgerList = document.getElementById('burger');

// Event listener for the create burger button
createBurgerBtn.addEventListener('click', createBurger);

// Function to create a burger based on selected ingredients
function createBurger() {
  // Get the selected ingredients
  const selectedIngredients = Array.from(ingredientCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  // Clear the current burger
  burgerList.innerHTML = '';

  // Create a list item for each selected ingredient and append it to the burger list
  selectedIngredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    burgerList.appendChild(listItem);
  });
}
