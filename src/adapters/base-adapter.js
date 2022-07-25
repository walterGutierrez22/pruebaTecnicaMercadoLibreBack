/**
 * @module BaseAdapter
 */

 const { config } = require("../config/environments/index");
 const axios = require("axios").default;
 //const fs = require("fs");
 const https = require("https");
 
 const HTTPS_AGENT_PCO = new https.Agent({
   //pfx: fs.readFileSync(config.pcoConfig.cert.pfx),
   //passphrase: config.pcoConfig.cert.passphrase,
   keepAlive: true,
 });
 
 const PCO_CLIENT = axios.create({
   httpsAgent: HTTPS_AGENT_PCO,
   timeout: 100000,
 });
 
 const executeRequest = async (url, method, headers, data) => {
   const options = { url, method, headers, data };
   const response = await PCO_CLIENT(options);
   return response.data;
 };
 
 const get = async (url, headers) => {
  return executeRequest(url, "GET", headers);
 };
 
 const post = async (url, body, headers) => {
   return executeRequest(url, "POST", headers, body);
 };
 
 const put = async (url, body, headers) => {
   return executeRequest(url, "PUT", headers, body);
 };
 
 module.exports = { get, post, put };
 