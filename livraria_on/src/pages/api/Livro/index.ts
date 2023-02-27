import { NextApiRequest, NextApiResponse } from 'next'
import controleL  from '../../controle/ControleLivros'
import Livro from '../../../../public/modelo/Livro'
import fs from 'fs'

const LIVRO_JSON_PATH = './public/livro.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const livrosJson = await controleL.obterLivros()

      const livros: Livro[] = Object.values(livrosJson)

      res.status(200).json(livros)

    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter livros: ' + error })
    }
  } else if (req.method === 'POST') {
    try {
      const novoLivro: Livro = req.body;
     

      // Lê o conteúdo do arquivo livro.json
      const livroJsonString = await fs.promises.readFile(LIVRO_JSON_PATH, 'utf-8');

      // Converte o conteúdo lido em um objeto JavaScript
      const livros = JSON.parse(livroJsonString);

      // Identifica o maior código entre os dados já cadastrados
      const maioresCodigos = Object.keys(livros).map(Number).sort((a, b) => b - a);
      
      const maiorCodigo = maioresCodigos.length > 0 ? maioresCodigos[0] : 0;
      
      // Atribui o código do novo livro como o maior código mais um
      if (maiorCodigo === 0 && livros.length === 0) {
        novoLivro.codigo = maiorCodigo;
      } else {
        novoLivro.codigo = maiorCodigo + 1;
      }

      // Adiciona o novo livro ao objeto JavaScript
      livros[novoLivro.codigo] = novoLivro;

      // Substitui cada valor do código pelo valor do índice
      livros.forEach((livro:Livro, indice:number) => {
        livro.codigo = indice;
      });

      // Converte o objeto JavaScript atualizado em uma string JSON
      const livroJsonStringAtualizado = JSON.stringify(livros);

      // Escreve a string JSON atualizada no arquivo livro.json
      await fs.promises.writeFile(LIVRO_JSON_PATH, livroJsonStringAtualizado);

      console.log('Livro incluído com sucesso:', maiorCodigo, maioresCodigos);

      res.status(200).json(novoLivro);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao incluir livro: ' + error })
    }
  }
}
