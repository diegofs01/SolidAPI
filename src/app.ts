import express from 'express';
import { mongoConnection } from './repositories/implementations/Mongo/MongoConnection';
import { router } from './routes';
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(router);

mongoConnection();

export { app }