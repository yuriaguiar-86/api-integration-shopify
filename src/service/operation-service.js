const Operation = require("../model/repository/operation");

class OperationService {
    async findAll() {
        return Operation.findAll();
    }

    async findById(id) {
        const operation = await Operation.findByPk(id);

        if (!operation) {
            throw new Error('Operação não encontrada!');
        }
        return operation;
    }

    async create(data) {
        return await Operation.create(data);
    }

    async update(id, data) {
        const operation = await this.findById(id);
        return operation.update(data);
    }

    async destroy(id) {
        const operation = await this.findById(id);
        await operation.destroy();
    }
}

module.exports = new OperationService();