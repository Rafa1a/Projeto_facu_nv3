import Livro from '../modelo/Livro';
export function obterLivros(): Array<Livro> {
  return [
    { codigo: 1, codLivro: 1, titulo: 'Título 1', resumo: 'Resumo 1', autores: ['Autor 1'] },
    { codigo: 2, codLivro: 2, titulo: 'Título 2', resumo: 'Resumo 2', autores: ['Autor 2'] },
    { codigo: 3, codLivro: 3, titulo: 'Título 3', resumo: 'Resumo 3', autores: ['Autor 3'] }
  ];
}

export function incluirLivro(livro: Livro): void {
  const livros = obterLivros();
  const novoCodigo = livros.reduce((maiorCodigo, livro) => {
    return livro.codigo > maiorCodigo ? livro.codigo : maiorCodigo;
  }, 0) + 1;
  livro.codigo = novoCodigo;
  livros.push(livro);
}

