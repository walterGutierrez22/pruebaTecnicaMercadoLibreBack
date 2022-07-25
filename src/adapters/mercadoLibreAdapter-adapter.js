const baseAdapter = require("./base-adapter");
const { config } = require("../config/environments/index");
const { PARAMETERS_REQUEST } = require('../shared/enumerator');

const getProductByQuery = async (query, headers) => {
  const url = `${config.mercadoLibreConfig.urlApi.ProductByQuery}?${PARAMETERS_REQUEST.QUERY}=${query}`;
  return baseAdapter.get(url, headers);
};

const getProductById = async (id, headers) => {
  const url = 
    config.mercadoLibreConfig.urlApi.ProductById.replace(`:${PARAMETERS_REQUEST.ID}`,id)
  ;
  return baseAdapter.get(url, headers);
};

const getProductByIdDescription = async (id, headers) => {
  const url = 
    config.mercadoLibreConfig.urlApi.ProductByIdDescription.replace(`:${PARAMETERS_REQUEST.ID}`,id)
  ;
  return baseAdapter.get(url, headers);
};

module.exports = { getProductByQuery, getProductById, getProductByIdDescription };
