import { NextApiRequest, NextApiResponse } from "next";
import {getEditoras} from "../../controle/ControleEditora";
import Editora from '../../modelo/Editora';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  
  if (req.method === "GET") {
    const editoras = await getEditoras()
    res.status(200).json(editoras)
  } else {
    res.status(405).end();
  }
};
