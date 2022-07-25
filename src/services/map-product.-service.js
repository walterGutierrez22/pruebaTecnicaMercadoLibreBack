const { AUTHOR } = require('../shared/enumerator');

const mapProductsByQuery = (resultProducts) => {
    const itemsProduct = [];
    resultProducts.results.forEach(product => {
        const itemProduct = mapProduct(product);
        itemProduct.category = product.category_id;
        itemProduct.city_name = product.address.city_name;
        itemProduct.picture= product.thumbnail;
        itemsProduct.push(itemProduct);
    });
    return {
        author: mapAuthor(),
        categories: mapCategories(resultProducts),
        items: itemsProduct
    }
}

const mapProductsById = (product, ProductDescription) => {
    const itemProduct = mapProduct(product);
    itemProduct.sold_quantity = product.sold_quantity;
    itemProduct.description = ProductDescription.plain_text;
    itemProduct.picture= product.pictures[0].url;
    return {
        author: mapAuthor(),
        item: itemProduct,
    }
}

const mapProduct = (product) => {
    return {
        id: product.id,
        title: product.title,
        price: mapPrice(product),
        condition: getCondition(product.attributes),
        free_shipping: product.shipping.free_shipping,
    }
}

const mapAuthor = () => {
    return {
        name: AUTHOR.NAME,
        lastname: AUTHOR.LAST_NAME
    }
}

const mapPrice = (product) => {
    return {
        currency: product.currency_id,
        amount: product.price,
        decimals: 0
    }
}

const mapCategories = (resultProducts) => {
    const categoriesName = [];
    if(resultProducts.filters.length > 0){
        resultProducts.filters[0].values[0].path_from_root.forEach(category=>{
            categoriesName.push(category.name);
        });
    }
    return categoriesName;
}

const getCondition = (attributes) => {
    let attribute = attributes.find(
        element => element.id === "ITEM_CONDITION"
    );
    return attribute ? attribute.value_name : "";
}

module.exports = {
    mapProductsByQuery,
    mapProductsById
  };