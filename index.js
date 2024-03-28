const { createClient } = require('redis');

const handler = async (event, context) => {

    const url = process.env.URL;

    const client = createClient({
        socket: {
            host: url,
            port: 6379,
        }
    });
    client.on('error', error => console.error('Redis Client Error:', error));
    client.on('connect', () => console.log('Redis Client Connected!'));

    try {
        await client.connect();

        let date = await client.get('my-date');
        
        if(!date) {
            date = new Date().toString();
            await client.set('my-date', date);
            
            console.log('Cached: ', date);
        }

        return date;
    } catch(error) {
        console.error('Error wups', error);
        throw error;
    } finally {
        await client.disconnect();
    }
};

module.exports = {
    handler
};
