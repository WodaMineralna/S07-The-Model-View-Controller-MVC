const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  // * static, so we call this method directly on the Class itself - not on the single instance of the 'Product'
  static fetchAll() {
    return products;
  }
};
