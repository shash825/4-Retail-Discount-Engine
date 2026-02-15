const products = [
    {name: 'Chair', category: 'household', price: 50, inventory: 20},
    {name: 'Shirt', category: 'apparel', price: 25, inventory: 100},
    {name: 'Lamp', category: 'electronics', price: 30, inventory: 50},
    {name: 'Pumpkin', category: 'groceries', price: 5, inventory: 15},
    {name: 'Sofa', category: 'household', price: 500, inventory: 5},
];

for (const p of products) {
    let discount = 0;

    switch (p.category) {
        case 'household':
            discount = 0.1;
            break;
        case 'groceries':
            discount = 0.1;
            break;
        case 'apparel':
            discount = 0.15;
            break;
        case 'electronics':
            discount = 0.2;
            break;
        default:
            console.log("Nothing for you");
    }
    p.discountedPrice = p.price * (1 - discount);
}


    