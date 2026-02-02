const operationService = require('../service/operation-service');

class OperationController {
    async index(_, res) { 
        try {
            await operationService.findAll()
                .then((operations) => {
                    return res.status(200).json({ operations });
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async view(req, res) { 
        try {
            const id = req.params.id;

            await operationService.findById(id)
                .then((operation) => {                    
                    return res.status(200).json({ operation });
                })
                .catch((err) => {
                    return res.status(404).json({ message: err.message });
                });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async add(req, res) { 
        try {
            const { name, store_name, client, secret } = req.body;             
            const operation = await operationService.create(name, store_name, client, secret);

            return res.status(201).json({ 
                operation, 
                message: 'Operação cadastrada com sucesso!' 
            });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador!' });
        }
    }

    async edit(req, res) { 
        try {
            const id = req.params.id;
            const { name, store_name, client, secret } = req.body;

            await operationService.update(id, name, store_name, client, secret)
                .then((operation) => {
                    return res.status(200).json({ 
                        operation, 
                        message: 'Operação editada com sucesso!' 
                    });
                })
                .catch((err) => {
                    return res.status(404).json({ message: err.message });
                });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador!'});
        }
    }

    async delete(req, res) { 
        try {
            const id = req.params.id;
            
            await operationService.destroy(id)
                .then(() => {
                    return res.status(204).json({ message: 'Operação removida com sucesso!' });
                })
                .catch((err) => {
                    return res.status(404).json({ message: err.message });
                });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }
}

module.exports = new OperationController();