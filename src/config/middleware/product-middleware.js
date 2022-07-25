"use strict";
const messageJson = require("../asserts/message.json");
const { PARAMETERS_REQUEST } = require('../../shared/enumerator');

const validateFielsGetProductByQuery = async (req, res, next) => {
    try {
        existProperty(req.query, PARAMETERS_REQUEST.QUERY, {
            ...messageJson.find((x) => x.Code === 1),
            error: new Error(),
        });
        next();
    } catch(error) {
        return res.status(404).json({
            Code: error.Code,
            Message: error.Text,
          });
    } 
}

const validateFielsGetProductById = async (req, res, next) => {
    try {
        existProperty(req.params, PARAMETERS_REQUEST.ID, {
            ...messageJson.find((x) => x.Code === 2),
            error: new Error(),
        });
        next();
    } catch(error) {
        return res.status(404).json({
            Code: error.Code,
            Message: error.Text,
          });
    }
    
}

function existProperty(request, property, error) {
    if (!request[property]) throw error;
}

module.exports = {
    validateFielsGetProductByQuery,
    validateFielsGetProductById
  };