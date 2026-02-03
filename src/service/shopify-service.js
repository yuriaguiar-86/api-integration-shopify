const axios = require('axios');

class ShopifyService {
    async getAccessToken({ domain, clientId, clientSecret }) {
        try {
            const response = await axios.post(
                `https://${domain}/admin/oauth/access_token`,
                {
                    grant_type: 'client_credentials',
                    client_id: clientId,
                    client_secret: clientSecret
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;

        } catch (error) {
            throw new Error(
                error.response?.data?.error_description ||
                'Erro ao autenticar no Shopify'
            );
        }
    }

    async execute({ domain, accessToken, query }) {
        try {
            const response = await axios.post(
                `https://${domain}/admin/api/2026-01/graphql.json`,
                {
                    query
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Shopify-Access-Token': accessToken
                    }
                }
            );
            return response.data;

        } catch (error) {
            throw new Error(
                error.response?.data?.errors?.[0]?.message ||
                'Erro ao executar query GraphQL no Shopify'
            );
        }
    }
}

module.exports = new ShopifyService();