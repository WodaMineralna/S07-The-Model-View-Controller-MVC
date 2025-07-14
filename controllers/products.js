const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProductsPage = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", {
    products,
    pageTitle: "Shop",
    path: "/",
  });
};
