import { NextApiRequest, NextApiResponse } from "next";
import {getEditoras,getNomeEditora} from "../../controle/ControleEditora";



export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { codEditora } = req.query;
    const nomeEditora = getNomeEditora(Number(codEditora));
    res.status(200).json({ nome: nomeEditora });
  } else {
    res.status(405).end();
  }
};
