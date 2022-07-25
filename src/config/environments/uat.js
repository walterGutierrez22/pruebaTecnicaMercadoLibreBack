module.exports.config = {
  port: 3003,
  corsOrigin: [
    "http://localhost:4200",
  ],
  mercadoLibreConfig: {
    urlApi: {
      ProductByQuery: "https://api.mercadolibre.com/sites/MLA/search",
      ProductById: "https://api.mercadolibre.com/items/:id",
      ProductByIdDescription: "https://api.mercadolibre.com/items/:id/description"
    }
    
  }
};
