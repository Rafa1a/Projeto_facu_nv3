import { NextApiRequest, NextApiResponse } from "next";
import {getEditoras} from "../../controle/ControleEditora";
import Editora from '../../modelo/Editora';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const novaseditoras : Editora[] = [{
    codEditora: 0,
    nome: 'editora1' 
  },{codEditora: 1,
    nome: 'editora2' }
  ]
  res.status(200).json(novaseditoras)
  if (req.method === "GET") {
    const editoras = getEditoras();
    res.status(200).json(editoras);

  } else {
    res.status(405).end();
  }
};
