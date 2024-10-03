import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import mongoose from 'mongoose';
import { bookingRouter } from './routes/all-routes.js';

// connect to database
await mongoose.connect(process.env.MONGO_URL)

// create a server app
const myapp = express();

// // use middlewares
// app.use(express.json());


// Define routes
myapp.use(cors()) 
myapp.use(express.json());
myapp.use(bookingRouter);


// listen to server
myapp.listen(3001,function () {
   console.log('app is listening on port 3001');
});  