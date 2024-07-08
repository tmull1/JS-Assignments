// Initializes the cart in localStorage if it doesn't exist.
function initializeCart() {
    // Check if the 'cart' item exists in localStorage.
    if (!localStorage.getItem('cart')) {
        // If 'cart' doesn't exist, initialize it as an empty array.
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

// Adds an item to the cart.
function addItem(item) {
    // Retrieve the cart from localStorage and parse it into a JavaScript array.
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Add the new item to the cart.
    cart.push(item);
    // Save the updated cart back to localStorage.
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Removes an item from the cart by its id.
function removeItem(itemId) {
    // Retrieve the cart from localStorage and parse it into a JavaScript array.
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Filter out the item with the specified id.
    cart = cart.filter(item => item.id !== itemId);
    // Save the updated cart back to localStorage.
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Displays the current contents of the cart in the console.
function displayCart() {
    // Retrieve the cart from localStorage and parse it into a JavaScript array.
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Log the cart contents to the console.
    console.log(cart);
}

// Initialize the cart when the script runs.
initializeCart();

// Add an event listener to the addItemForm to handle form submission.
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Get the item name and price from the form inputs.
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    // Create a new item object with a unique id, name, and price.
    const newItem = {
        id: Date.now(),
        name: itemName,
        price: itemPrice
    };

    // Add the new item to the cart.
    addItem(newItem);
    // Reset the form inputs.
    document.getElementById('addItemForm').reset();
});

// Add an event listener to the displayCartButton to display the cart contents when clicked.
document.getElementById('displayCartButton').addEventListener('click', displayCart);
