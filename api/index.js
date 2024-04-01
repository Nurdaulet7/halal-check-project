const express = require("express");
const cors = require("cors");
const productsData = require("./data/products.json");
const additiviesData = require("./data/addivies.json");
const certifiedEnterprises = require("./data/certifiedEnterprises.json");

const app = express();

app.use(cors());

// function getProductList() {
//   const products = productsData;
//   return products;
// }

app.get("/product-list", (req, res) => {
  res.json(productsData);
});

app.get("/product-list-delayed", (req, res) => {
  setTimeout(() => {
    res.json(productsData);
  }, 2000);
});

app.get("/additivies-list", (req, res) => {
  res.json(additiviesData);
});

app.get("/additivies-list-delayed", (req, res) => {
  setTimeout(() => {
    res.json(additiviesData);
  }, 2000);
});

app.get("/enterprises-list-delayed", (req, res) => {
  setTimeout(() => {
    res.json(certifiedEnterprises);
  }, 2000);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
