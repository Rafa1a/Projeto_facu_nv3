import { NextApiRequest, NextApiResponse } from 'next'
import {obterLivros, incluirLivro} from "../../controle/ControleLivros";
import Livro from '../../modelo/Livro';


export default (req: NextApiRequest, res: NextApiResponse) => {
  
  if (req.method === 'GET') {
    try {

      const livros = obterLivros()
      
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
