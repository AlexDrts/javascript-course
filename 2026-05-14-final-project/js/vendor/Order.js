export class Order {
  constructor(customer, products) {
    this.customer = customer;
    this.products = products;
    this.date = new Date();
    this.status = "new";
  }

  getSummary() {
    let total = this.products.reduce((sum, p) => sum + p.price, 0);
    return {
      customer: this.customer.name,
      total: total,
      status: this.status
    };
  }
}
