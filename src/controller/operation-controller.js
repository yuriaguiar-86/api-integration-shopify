const operationService = require('../service/operation-service');

class OperationController {
    async index(_, res) { 
        try {
            const operations = await operationService.findAll();
            return res.json(operations);

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async view(req, res) { 
        try {
            const operation = await operationService.findById(req.params.id);
            return res.json(operation);

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async add(req, res) { 
        try {           
            const operation = await operationService.create(req.body);
            return res.json(operation);

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador!' });
        }
    }

    async edit(req, res) { 
        try {
            const operation = await operationService.update(req.params.id, req.body);
            return res.json(operation);

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador!'});
        }
    }

    async delete(req, res) { 
        try {
            await operationService.destroy(req.params.id)
            return res.sendStatus(204);

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }
}

module.exports = new OperationController();