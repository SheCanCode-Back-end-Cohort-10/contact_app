import swaggerUi from "swagger-ui-express"
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import configuration from './configs/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
import swagger from "./docs/swagger.json" assert { type: "json" };
import errorHandler from './errorHandler/contactErrorHandler.js';


app.use(express.json());
app.use(cors());


import router from './routes/contact.routes.js'

app.use('/contact_app', router)
app.use("/swagger",  swaggerUi.serve, swaggerUi.setup(swagger))



mongoose.connect(configuration.mongoURI)
.then(() => {
    app.listen(configuration.port, ()=> {
        console.log("MongoDB is connected")
        console.log("listening on port "+configuration.port);
    });
    app.use(errorHandler.notFound)
    app.use(errorHandler.serverError)
   })
.catch(err => {
    console.log(err);
});
app.use("/",(req,res)=>{
    // console.log("listening server");
    return res.send("server is running");
})


