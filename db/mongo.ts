import { MongoClient } from '../deps.ts';

const client = new MongoClient();
const db = await client.connect('mongodb://127.0.0.1:27017/spieler');

export { db }
