const products = [
    {name: "xiaomi", model: "note 10 pro", price: 3000},
    {name: "oppo", model: "f17", price: 5000},
    {name: "samsung", model: "galaxy", price: 5000},
    {name: "iphone", model: "5", price: 8000},
];

const result = products.find(product => product.price == 5000);
console.log(result);