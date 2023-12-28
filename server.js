import express from "express";
import mongoose from "mongoose";
import bodyparser from "express";
import contactRouter from './routes/contact.js';
import cors from 'cors'

const app = express();

app.use(bodyparser.json());
app.use(cors({
  origin:"http://localhost:5173",
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}))

mongoose
  .connect(
    "mongodb+srv://shivamji019:FqN8LL38IRDZKKDE@volcanus.8addxe8.mongodb.net/",
    {
      dbName: "MERN_PROJECT_Contact_Keeper",
    }
  )
  .then(() => console.log("mongodb connected..."));

  app.use('/api',contactRouter); 


const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port} `));
 