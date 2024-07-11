import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const corsOption = {
    origin: "*",
    credentials: true,
    //  access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOption));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(`${process.env.PORT}`, () => {
    console.log(`Sever is running on this PORT: ${process.env.PORT}`);
})