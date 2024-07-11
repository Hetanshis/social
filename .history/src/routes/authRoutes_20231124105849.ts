import { Router } from "express";
import { AuthController } from "../controller/authController";

export class AuthRoutes {
    private router: Router;
    private authController: AuthController
    constructor() {
        this.router = Router();
        this.authController = new AuthController()
        this.setRoutes();
    }
    private setRoutes(){
         const {register} = this.authController

         this.router.post("/register", register);
    }
    public getRouter(){
        return this.router;
    }
}