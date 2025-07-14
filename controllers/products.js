const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProductsPage = (req, res, next) => {
  res.render("shop", {
    products,
    pageTitle: "Shop",
    path: "/",
  });
};
