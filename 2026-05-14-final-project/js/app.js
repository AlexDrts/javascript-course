import { Product } from "./vendor/Product.js";
import { Category } from "./vendor/Category.js";
import { Manufacturer } from "./vendor/Manufacturer.js";
import { Cart } from "./vendor/Cart.js";
import { Customer } from "./vendor/Customer.js";
import { Order } from "./vendor/Order.js";


let apple = new Manufacturer("Apple", "USA", 5);

let phones = new Category("Phones", "Smartphones category");

let p1 = new Product("iPhone 15", 50000, 4.8, apple, phones);
let p2 = new Product("iPhone 14", 40000, 4.6, apple, phones);

apple.addProduct(p1);
apple.addProduct(p2);

phones.addProduct(p1);
phones.addProduct(p2);

let cart = new Cart();
let customer = new Customer("Oleh", "oleh@gmail.com");

customer.setCart(cart);

cart.add(p1);
cart.add(p2);

let order = new Order(customer, cart.items);

console.log("Customer:", customer.name);
console.log("Cart total:", cart.getTotal());
console.log("Order:", order.getSummary());
