// Coding Challenge 03b

// Initial inventory

let inventory = [{
    sku: 114,
    name: "iPhone 17",
    price: 799.99,
    stock: 1300,
},
{
    sku: 277,
    name: "iPad Air",
    price: 850.99,
    stock: 2000,
},
{
    sku: 112,
    name: "Apple Watch SE",
    price: 399.99,
    stock: 300,
},
{
    sku: 110,
    name: "Airpods Pro",
    price: 290.99,
    stock: 500,
}]

inventory.forEach(obj =>console.log(`SKU: ${obj.sku} |`, `Name: ${obj.name} |`, `Price: ${obj.price} |`, `Stock: ${obj.stock}`));

// New inventory item

newProduct = {sku: 245, name: "iPad Pro", price: 950.99, stock: 2300}
inventory.push(newProduct)

console.log(inventory)

//Removing last product

inventory.pop(newProduct)
console.log(inventory)
