const Operation = require("../model/repository/operation");

class OperationService {
    async findAll() {
        return await Operation.findAll();
    }

    async findById(id, transaction) {
        const operation = await Operation.findByPk(id, { transaction });

        if (!operation) {
            throw new Error('Operação não encontrada!');
        }
        return operation;
    }

    async create(name, store_name, client, secret, transaction) {
        return await Operation.create({
            name, store_name, client, secret
        }, { transaction });
    }

    async update(id, name, store_name, client, secret, transaction) {
        const operation = await this.findById(id, transaction);

        operation.name = name ?? operation.name;
        operation.store_name = store_name ?? operation.store_name;
        operation.client = client ?? operation.client;
        operation.secret = secret ?? operation.secret;

        return await operation.save({ transaction });
    }

    async destroy(id, transaction) {
        const operation = await this.findById(id, transaction);
        await operation.destroy({ transaction });
        return true;
    }
}

module.exports = new OperationService();