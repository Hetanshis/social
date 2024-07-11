import { Request, Response } from "express";
import prisma from "../config/prisma";

export class AuthController {
    public async register(req:Request, res:Response){
        try{ 
          const {name, email, password, contactNumber} = req.body;

          const exitingUser = await prisma.user.create({data:{name, email, password, contactNumber}})

        }catch(err:any){
            return res.status(500).json({status:false, message:err.message})
        }
    }
}