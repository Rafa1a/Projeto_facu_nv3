import { NextApiRequest, NextApiResponse } from 'next'
import {obterLivros, incluirLivro, excluirLivro} from "../../controle/ControleLivros";




export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      const codigo = Number(req.query.codigo)
      excluirLivro(codigo)
      res.status(200).json({ message: 'Livro excluído com sucesso!' })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
