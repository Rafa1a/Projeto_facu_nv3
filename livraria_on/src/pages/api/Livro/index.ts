import { NextApiRequest, NextApiResponse } from 'next'
import { obterLivros, incluirLivro,atualizarLivro } from '../../controle/ControleLivros'
import Livro from '../../modelo/Livro'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const livrosJson = await obterLivros()

      const livros: Livro[] = Object.values(livrosJson)

      res.status(200).json(livros)

    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter livros: ' + error })
    }
  } else if (req.method === 'POST') {
    try {
      const livro = req.body
      const novoLivro = await incluirLivro(livro)

      res.status(200).json({ message: 'Livro incluído com sucesso!', livro: novoLivro })
      
    } catch (error) {
      res.status(500).json({ message: 'Erro ao incluir livro: ' + error })
    }
  } else if (req.method === 'PUT') {
    try {
      const livro = req.body
      const livroAtualizado = await atualizarLivro(livro)

      res.status(200).json({ message: 'Livro atualizado com sucesso!', livro: livroAtualizado })
      
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar livro: ' + error })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}