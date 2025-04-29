class Mobileshop {
  constructor() {
    this.mobiles = [];
  }
  addMobile(mobiles) {
    this.mobiles.push(...mobiles);
  }
  listAllMobiles() {
    this.mobiles.forEach(function (mb, index) {
      console.log(
        `${index + 1}) ${mb.brand} - ${mb.model} - ${mb.color} - ${
          mb.price
        } - ${mb.specs}`
      );
    });
  }
}

class Mobile {
  constructor(brand, model, price, color, specs) {
    this.id = Math.floor(Math.random() * 1000000);
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.specs = specs;
  }
  getMobileInfo() {
    console.log(
      `${this.brand} - ${this.model} - $${this.price} - ${this.color} - ${this.specs}`
    );
  }
}

let zumZumMbls = new Mobileshop();
let s22ultra = new Mobile(
  "samsung",
  "S22 Ultra",
  120000,
  "Burgundy Puruple",
  "8GB RAM 256 ROM"
);
let iphone = new Mobile(
  "Apple",
  "15 Pro Max",
  160000,
  "Titanium Black",
  "8GB RAM 256 ROM"
);
zumZumMbls.addMobile([s22ultra, iphone]);
