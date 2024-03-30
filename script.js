document.addEventListener('DOMContentLoaded', function() {
    displayMenuItems();
});

const menuItems = [
    { name: 'Espresso', description: '', price: 2.5 },
    { name: 'Latte', description: '', price: 3.5 },
    { name: 'Cappuccino', description: '', price: 3.0 },
    { name: 'Americano', description: '', price: 2.0 },
    { name: 'Mocha', description: '', price: 4.0 }
];

let shoppingCart = [];

function displayMenuItems() {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';

    menuItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'menu-card';

        const content = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>$${item.price.toFixed(2)}</p>
        `;

        card.innerHTML = content;

        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.addEventListener('click', function() {
            addToCart(item.name, item.price);
        });

        card.appendChild(addButton);
        menu.appendChild(card);
    });
}

function addToCart(itemName, price) {
    shoppingCart.push({ name: itemName, price: price });
    displayShoppingCart();
}

function displayShoppingCart() {
    const shoppingCartDiv = document.getElementById('shopping-cart');
    shoppingCartDiv.innerHTML = '';

    let total = 0;

    shoppingCart.forEach(item => {
        shoppingCartDiv.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        total += item.price;
    });

    shoppingCartDiv.innerHTML += `<strong>Total: $${total.toFixed(2)}</strong>`;
}
