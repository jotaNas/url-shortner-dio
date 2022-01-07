import express from "express";
import { Request, Response } from "express";
import { URLController } from "./controller/URLController";

const api = express();
api.use(express.json());

const urlController = new URLController();
api.post("/shorten", urlController.shortnen);

api.get("/hash", urlController.redirect);

api.get("/test", (req: Request, res: Response) => {
  res.json({ success: true });
});

api.listen(5000, () => console.log("express listening"));
