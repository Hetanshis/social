import { Request } from "express";

export class AuthController {
    public async register(req:Request, res:Response){
        try{

        }catch(err:any){
            return res.status(500).json({status:false, message:err.message})
        }
    }
}