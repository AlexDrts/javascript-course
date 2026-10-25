export class Manufacturer {
  constructor(name, country, rating) {
    this.name = name;
    this.country = country;
    this.rating = rating;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }
}
