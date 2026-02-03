const express = require('express');
const controller = require('../controller/shopify-controller');
const shopifyRouter = express.Router();

shopifyRouter.post('/shopify/access-token', controller.getAccessToken);
shopifyRouter.post('/shopify/products', controller.executeQuery);

module.exports = shopifyRouter;
