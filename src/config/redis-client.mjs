import { createClient } from 'redis';
import 'dotenv/config'; 

const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

await redisClient.connect();

console.log('Successfully connected to Redis!');

export const redis = redisClient;