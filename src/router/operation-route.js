const express = require('express');
const operationController = require('../controller/operation-controller');
const operationRouter = express.Router();

operationRouter.get('/operations', operationController.index);
operationRouter.get('/operations/:id', operationController.view);
operationRouter.post('/operations', operationController.add);
operationRouter.put('/operations/:id', operationController.edit);
operationRouter.delete('/operations/:id', operationController.delete);

module.exports = operationRouter;