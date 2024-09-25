// Product Cart Array to hold the products
let cart = [];

// Add a product to the cart
function addToCart(name, price, quantity) {
    // Check if the product already exists in the cart
    let product = cart.find(item => item.name == name);
    
    if (product) {
        // If the product exists, increase the quantity
        product.quantity += quantity;
    } else {
        // If the product doesn't exist, add a new product to the cart
        cart.push({ name, price, quantity });
    }
}

// Remove a product from the cart
function removeFromCart(name) {
    // Filter out the product with the specified name
    cart = cart.filter(item => item.name != name);
}

// Calculate total cost of the cart
function calculateTotal() {
    // Loop through the cart and calculate total price
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}

// List all items in the cart
function listCart() {
    if (cart.length == 0) {
        console.log("Your cart is empty.");
    } else {
        cart.forEach(item => {
            console.log(`Product: ${item.name} \nPrice: N${item.price} \nQuantity: ${item.quantity}`);
        });
    }
}

addToCart('Shirt', 1200, 10);
addToCart('Trouser', 2500, 6);
addToCart('Trouser', 2500, 2);
addToCart('Rice', 1500, 2);

console.log("Items in cart:");
listCart();

console.log(`Total Cost: ${calculateTotal()}`);
console.log(`\n`);

removeFromCart('Shirt');
removeFromCart('Beans');
console.log(`Items in cart after removing Shirt:`);
listCart();

console.log(`Total Cost after removal: ${calculateTotal()}`);
