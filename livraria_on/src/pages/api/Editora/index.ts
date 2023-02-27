import { NextApiRequest, NextApiResponse } from "next";
import controleE from "../../controle/ControleEditora";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  
  if (req.method === "GET") {
    const editoras = await controleE.getEditoras()
    res.status(200).json(editoras)
  } else {
    res.status(405).end();
  }
};
