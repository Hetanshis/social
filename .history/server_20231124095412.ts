import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
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