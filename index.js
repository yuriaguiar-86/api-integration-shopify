require('dotenv').config();
const express = require('express');
const connection = require('./src/model/connection');
const operationRouter = require('./src/router/operation-route');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', operationRouter);

connection.sequelize.sync({ force: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}.`);
        });
    })
    .catch((error) => {
        console.log(`Não foi possível conectar ao banco de dados: ${error}`);
    });