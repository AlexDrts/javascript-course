class Product {
  constructor(imageUrl, name, rating, price, discountedPrice) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.rating = rating;
    this.price = price;
    this.discountedPrice = discountedPrice;
  }

  createCard() {
    let card = document.createElement("div");
    card.classList.add("card");

    let stars = "⭐".repeat(Math.round(this.rating));

    card.innerHTML = `
            <img src="${this.imageUrl}" alt="">
            <div class="content">
                <div class="name">${this.name}</div>
                <div class="rating">${stars}</div>
                <div class="oldPrice">${this.price} грн</div>
                <div class="newPrice">${this.discountedPrice} грн</div>
                <button class="btn">Додати в кошик</button>
            </div>
        `;

    return card;
  }
}


class ProductGenerator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  generate(productsCount) {
    for (let i = 1; i <= productsCount; i++) {

      let rating = (Math.random() * 4 + 1).toFixed(1);
      let price = Math.floor(Math.random() * 5000) + 1000;
      let discount = Math.floor(Math.random() * 800);

      let product = new Product(
        `https://picsum.photos/300/200?random=${i}`,
        `Товар ${i}`,
        rating,
        price,
        price - discount
      );

      this.container.appendChild(product.createCard());
    }
  }
}


// запуск
let generator = new ProductGenerator("products");
generator.generate(25);
