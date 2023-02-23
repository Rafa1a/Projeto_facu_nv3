import { NextApiRequest, NextApiResponse } from "next";
import {getEditoras} from "../../controle/ControleEditora";



export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const editoras = getEditoras();
    res.status(200).json(editoras);

  } else {
    res.status(405).end();
  }
};
