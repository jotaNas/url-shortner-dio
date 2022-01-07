import { Request, Response } from "express";
import shortId from "shortid";
import { config } from "../config/Constants";

export class URLController {
  public async shortnen(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body;

    const hash = shortId.generate();
    const shortURL = `${config.API_URL}/${hash}`;
    res.json({ originURL, hash, shortURL });
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;

    const url = {
      originURL:
        "https://cloud.mongodb.com/v2/61d843f6ee8a666e824105d1#clusters/connect?clusterId=Cluster0",
      hash: "gFFuGm_jl",
      shortURL: "http://localhost:5000/gFFuGm_jl",
    };
    res.redirect(url.originURL);
  }
}
