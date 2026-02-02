require('dotenv').config();
const express = require('express');
const connection = require('./src/model/connection');
const operationRouter = require('./src/router/operation-route');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(operationRouter);

connection.sequelize.sync({ force: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}.`);
        });
    })
    .catch((error) => {
        console.log(`Não foi possível conectar ao banco de dados: ${error}`);
    });



























// const Shopify = require('shopify-api-node');

// const shopify = new Shopify({
//   shopName: process.env.SHOP_NAME,
//   apiKey: process.env.API_KEY,
//   password: process.env.API_SECRET,
// });


// app.get('/', (req, res) => {
//     res.send('<h1>Shopify with NODEJS</h1>');
// });

// app.get('/products', async (req, res) => {
//     try {
//         await shopify.product
//             .list({ limit: 100 })
//             .then((products) => res.send(products))
//             .catch((err) => console.error(err));

//     } catch (err) {
//         console.error('Error:', err.response.data);
//         res.status(500).send('Failed to fetch products');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });