export class Cart {
  constructor() {
    this.items = [];
  }

  add(product) {
    this.items.push(product);
  }

  getTotal() {
    return this.items.reduce((sum, p) => sum + p.price, 0);
  }

  clear() {
    this.items = [];
  }
}
