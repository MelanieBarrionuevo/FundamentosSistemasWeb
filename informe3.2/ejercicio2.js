let prompt = require("prompt-sync")();

const productPrices = new Map();
productPrices.set('Laptop', 1200);
productPrices.set('Mouse', 25);
productPrices.set('Keyboard', 45);

console.log(productPrices.get('Mouse')); // 25

productPrices.forEach((price, product) => {
  console.log(`${product}: $${price}`);
});