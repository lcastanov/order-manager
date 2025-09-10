// Coding Challenge 03b

let inventory = [{
    sku: "SKU-004",
    name: "iPhone 17",
    price: 799.99,
    stock: 1300,
},
{
    sku: "SKU-007",
    name: "iPad Air",
    price: 850.99,
    stock: 2000,
},
{
    sku: "SKU-112",
    name: "Apple Watch SE",
    price: 399.99,
    stock: 300,
},
{
    sku: "SKU-110",
    name: "Airpods Pro",
    price: 290.99,
    stock: 500,
}]

inventory.forEach(obj =>console.log(`SKU: ${obj.sku} |`, `Name: ${obj.name} |`, `Price: ${obj.price} |`, `Stock: ${obj.stock}`));