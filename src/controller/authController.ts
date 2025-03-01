import { Request, Response } from "express";
import prisma from "../config/prisma";
import bcryptPassword from "../config/bcryptPassword";
import comparePassword from "../config/comparePassword";
import jwt from "jsonwebtoken";

export class AuthController {
  public async register(req: Request, res: Response) {
    try {
      const { name, email, password, contactNumber } = req.body;

      const existingUser = await prisma.user.findFirst({ where: { email } });
      if (existingUser) {
        return res
          .status(200)
          .json({ status: false, message: "Email is already exist." });
      }
      const pass = await bcryptPassword(password);
      const user = await prisma.user.create({
        data: { name, email, password: pass, contactNumber },
      });
      if (!user) {
        return res
          .status(200)
          .json({ status: false, message: "User is not registered." });
      }
      return res
        .status(200)
        .json({ status: true, message: "User is registered successfully" });
    } catch (err: any) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
        const {email, password} = req.body;

        const user = await prisma.user.findFirst({where:{email}})
        if(!user){
            return res.status(200).json({status:false, message:"Email is not found."})
        }
       
        if(!await comparePassword(user.password, password)){
            return res.status(200).json({status:false, message:"Invalid password"})
        }
        const token = jwt.sign({id: user.id}, `${process.env.APP_KEY}`);
        return res.status(200).json({status:true, message:"Login successfully.", token})
    } catch (err: any) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}
