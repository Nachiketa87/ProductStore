import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import prod_routes from './routes/product.routes.js'; 

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", prod_routes);

app.listen(5000, () =>{
    connectDB();
    console.log('Server started at http://localhost:5000')
})
