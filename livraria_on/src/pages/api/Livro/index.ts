import { NextApiRequest, NextApiResponse } from 'next'
import {obterLivros, incluirLivro} from "../../controle/ControleLivros";
import Livro from '../../modelo/Livro';


export default (req: NextApiRequest, res: NextApiResponse) => {
  const novoobjeto:Livro[] =[{
  codigo: 0,
  codLivro: 0,
  titulo: "rafinha",
  resumo: "a historia de como rafinha conseguiu sair dessa",
  autores: ["rafa", "irso"],

  },{
    codigo: 1,
    codLivro: 1,
    titulo: "tatu",
    resumo: "tatu bola",
    autores: ["rafa", "irso"],
  
    }]
  if (req.method === 'GET') {
    try {

      const livros = obterLivros()
      res.status(200).json(novoobjeto)
      res.status(200).json(livros)
    } catch (error) {
      res.status(500).json({ message: error})
    }
  } else if (req.method === 'POST') {
    try {
      const livro = req.body
      incluirLivro(livro)
      res.status(200).json({ message: 'Livro incluído com sucesso!' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
