const path = require("path");
const fs = require("fs").promises;

const appPath = require("../util/path");

// products.json path directory
const p = path.join(appPath, "data", "products.json");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  static async #loadData() {
    try {
      const data = await fs.readFile(p);
      console.log(JSON.parse(data));
      return JSON.parse(data);
    } catch (error) {
      // if products.json file does not exist
      if (error.code === "ENOENT") {
        let products = [];
        await fs.writeFile(p, JSON.stringify(products));
        return JSON.parse(products);
      } else {
        throw error;
      }
    }
  }

  async save() {
    const products = await Product.#loadData(); // getting the current products
    products.push(this); // pushing the newly created product into the local Array

    // ^ writing all of the products into the products.json file
    fs.writeFile(p, JSON.stringify(products), (err) => {
      console.log(err);
    });
  }

  // * 'static', so we can call this method directly on the Class itself - not on the single instance of the 'Product'
  static async fetchAll() {
    const products = await Product.#loadData();
    return products;
  }
};
