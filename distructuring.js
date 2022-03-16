const products = {
    brand: "xiaomi",
    seris: "redmi ",
    phoneDetails:{
        color: "bromze",
        ram: "6GB",
        rom: "128",
        more:{
            price: 27000,
            quality: "good",
            performance: "excellent"
        }
    }
}
const {price, quality} = products.phoneDetails.more;
console.log(price, quality);



const fruits = ["apple", "banana", "mango", "lichee"];
const [second, third] = [fruits[1], fruits[2]];
console.log(second, third);