export class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.cart = null;
  }

  setCart(cart) {
    this.cart = cart;
  }

  buy() {
    if (!this.cart) return "Cart is empty";
    return this.cart.getTotal();
  }
}
