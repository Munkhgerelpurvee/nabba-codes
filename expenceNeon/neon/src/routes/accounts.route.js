import {
  getAllAccounts,
  createAccount,
} from "../controllers/accounts.controller.js";
import { Router } from "express";

const accountsRouter = Router();

accountsRouter.get("/", getAllAccounts).post("/", createAccount);

export { accountsRouter };
