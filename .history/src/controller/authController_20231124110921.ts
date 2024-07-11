import { Request, Response } from "express";
import prisma from "../config/prisma";

export class AuthController {
    public async register(req:Request, res:Response){
        try{ 
          const {name, email, password, contactNumber} = req.body;

           const existingUser = await prisma.user.findFirst({where:{email}})
           if(existingUser){
            return res.status(200).json({status:false, message:"Email is already exist."})
           }
          const user = await prisma.user.create({data:{name, email, password, contactNumber}})
          if(!user){
            return res.status(200).json({status:false, message:"User is not registered."})
          }
          return res.status(200).json({status:true, message: "User is registered successfully"})
        }catch(err:any){
            return res.status(500).json({status:false, message:err.message})
        }
    }
}