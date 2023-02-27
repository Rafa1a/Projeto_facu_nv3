import { NextApiRequest, NextApiResponse } from "next";
import controleE from "../../../../public/controle/ControleEditora";

 
const LIVRO_JSON_PATH = './public/editora.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const  codEditora  = Number(req.query.codEditora);
    const nomeEditora = controleE.getNomeEditora(Number(codEditora));
    
    res.status(200).json(nomeEditora);
  } else {
    res.status(405).end();
  }
};
