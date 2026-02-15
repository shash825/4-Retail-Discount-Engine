//step 2
const products = [
    {name: 'Chair', category: 'household', price: 50, inventory: 20},
    {name: 'Shirt', category: 'apparel', price: 25, inventory: 100},
    {name: 'Lamp', category: 'electronics', price: 30, inventory: 50},
    {name: 'Pumpkin', category: 'groceries', price: 5, inventory: 15},
    {name: 'Sofa', category: 'household', price: 500, inventory: 5},
];
//step 3
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

//step 4
function extraDiscount(customerType) {
    switch (customerType) {
        case 'student':
            return 0.05;
        case 'senior':
            return 0.07;
        default:
            return 0;
    }
}

//step 5

const customers = [
{type: 'regular', cart: [{name: 'Chair', qty: 1}, {name: 'Shirt', qty: 2}]},
{type: 'student', cart: [{name: 'Sofa', qty: 1}, {name: 'Lamp', qty: 2}]},
{type: 'senior', cart: [{name: 'Pumpkin', qty: 10}, {name: 'Shirt', qty: 1}]},
];

for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
    let total = 0;

const extra = extraDiscount(customer.type);

    for (let j = 0; j < customer.cart.length; j++) {
        const cartItem = customer.cart[j];
        const product = products.find(p => p.name === cartItem.name);
        if (!product) continue;

        const qtyToBuy = Math.min(cartItem.qty, product.inventory);
        const basePrice = typeof product.discountedPrice === 'number' ? product.discountedPrice : product.price;
        const finalPricePerUnit = basePrice * (1 - extra);
        total += finalPricePerUnit * qtyToBuy;
        product.inventory -= qtyToBuy;
    }

    console.log(`Customer ${i + 1}: Total = $${total.toFixed(2)}`);
}


