import { Router } from "express";
import { AuthRoutes } from "./authRoutes";

const mainRoutes: Router = Router();

const apiRoutes : Router = new AuthRoutes().getRouter();
mainRoutes.use("/user", apiRoutes)