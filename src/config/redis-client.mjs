import { createClient } from 'redis';
import 'dotenv/config'; // This line loads the variables from your .env file

// Create the Redis client using the URL from your .env file
const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

// Connect to the Redis database
await redisClient.connect();

console.log('Successfully connected to Redis!');

// Export the connected client so other files can use it
export const redis = redisClient;