export class Category {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  listProducts() {
    return this.products.map(p => p.name);
  }
}
