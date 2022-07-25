/**
 * @module ApiRoutes
 */

const express = require("express");
const { getProductByQuery, getProductById } = require("../controllers/product-controller");
const {
  validateFielsGetProductByQuery, validateFielsGetProductById
} = require("../config/middleware/product-middleware");

module.exports.routes = () => {
  const router = express.Router();
  router.get("/api/values", function (req, res) {
    res.send("Running Successfully");
  });
  router.get("/api/items", validateFielsGetProductByQuery, getProductByQuery);
  router.get("/api/items/:id", validateFielsGetProductById, getProductById);
  return router;
};
