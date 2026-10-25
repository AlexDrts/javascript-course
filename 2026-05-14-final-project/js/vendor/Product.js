export class Product {
  constructor(name, price, rating, manufacturer, category) {
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.manufacturer = manufacturer;
    this.category = category;
  }

  getInfo() {
    return `${this.name} - ${this.price} грн`;
  }
}
