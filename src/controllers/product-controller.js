const productService = require("../services/product-service");

const getProductByQuery = async (req, res, next) => {
    try {
        const query = req.query.q;
        const products = await productService.getProductByQuery(query);
        return res.status(200).json(products);
    } catch(error){
        next();
        responseError(res, error);
    }
    
}

const getProductById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const products = await productService.getProductById(id);
        return res.status(200).json(products);
    } catch(error){
        next();
        responseError(res, error);
    }
    
}

const responseError = async (res, error) => {
    const response = error.response && error.response.data ? error.response.data : error;
    if(error.response && error.response.data) {
        return res.status(error.response.status).json(response);
    }
    return res.status(500).json(error.stack);
}

module.exports = {
    getProductByQuery,
    getProductById
  };
