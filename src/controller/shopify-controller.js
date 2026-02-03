const shopifyService = require('../service/shopify-service');

class ShopifyController {
    async getAccessToken(req, res) {
        try {
            const { domain, clientId, clientSecret } = req.body;

            if (!domain || !clientId || !clientSecret) {
                return res.status(400).json({
                    message: 'Parâmetros obrigatórios não informados!'
                });
            }

            const token = await shopifyService.getAccessToken({
                domain,
                clientId,
                clientSecret
            });

            return res.json(token);

        } catch (error) {
            return res.status(401).json({ message: error.message });
        }
    }

    async executeQuery(req, res) {
        try {
            const { domain, accessToken, query } = req.body;
            
            if (!domain || !accessToken || !query) {
                return res.status(400).json({
                    message: 'Campos obrigatórios não informados!'
                });
            }

            const response = await shopifyService.execute({
                domain,
                accessToken,
                query
            });
            return res.json(response);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ShopifyController();