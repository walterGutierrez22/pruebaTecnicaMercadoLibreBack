const  mercadoLibreAdapter = require("../adapters/mercadoLibreAdapter-adapter");
const mapProductService = require("./map-product.-service");

const getProductByQuery = async (query) => {
    const responseProducts = await mercadoLibreAdapter.getProductByQuery(query);
    return mapProductService.mapProductsByQuery(responseProducts);
}

const getProductById = async (id) => {
    const responseProductById = await mercadoLibreAdapter.getProductById(id);
    const responseProductByIdDescription = await mercadoLibreAdapter.getProductByIdDescription(id);
    return mapProductService.mapProductsById(responseProductById, responseProductByIdDescription);
}

module.exports = {
    getProductByQuery,
    getProductById
  };
