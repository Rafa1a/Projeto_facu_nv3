import { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import Livro from 'public/modelo/Livro';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      const codigo = Number(req.query.codigo);
      

      // Lê o conteúdo do arquivo livro.json
      const conteudo = fs.readFileSync('./public/livro.json', 'utf-8');

      // Converte o conteúdo em um objeto JavaScript
      const dados = JSON.parse(conteudo);

      // Filtra os livros que não possuem o código excluído
      const livros = dados.filter((livro:Livro) => livro.codigo !== codigo);

      // Converte o objeto JavaScript para uma string JSON
      const json = JSON.stringify(livros);

      // Sobrescreve o arquivo livro.json com o novo conteúdo
      fs.writeFileSync('./public/livro.json', json);

      res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};
