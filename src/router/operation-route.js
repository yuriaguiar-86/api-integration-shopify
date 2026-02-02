const express = require('express');
const operationController = require('../controller/operation-controller');
const operationRouter = express.Router();

operationRouter.get('/api/v1/operations', operationController.index);
operationRouter.get('/api/v1/operations/:id', operationController.view);
operationRouter.post('/api/v1/operations', operationController.add);
operationRouter.put('/api/v1/operations/:id', operationController.edit);
operationRouter.delete('/api/v1/operations/:id', operationController.delete);

module.exports = operationRouter;