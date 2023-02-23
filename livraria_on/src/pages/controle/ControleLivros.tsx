import Livro from '../modelo/Livro';
const baseURL = "http://localhost:3000/api/livros"

const obterLivros = async (): Promise<Livro[]>  => {
  const response = await fetch(baseURL)
  const data = await response.json()
  return data
}

export async function incluirLivro(livro: Livro): Promise<Livro> {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(livro)
  });

  const data = await response.json();

  if (Array.isArray(data) && data.length > 0) {
    const novoCodigo = data.reduce((maiorCodigo: number, livro: Livro) => {
      return livro.codigo > maiorCodigo ? livro.codigo : maiorCodigo;
    }, 0) + 1;
    livro.codigo = novoCodigo;
  }

  return livro;
}

  

const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, {
    method: "DELETE"
  })
  const data = await response.json()
  return data.ok
}
export {excluirLivro,obterLivros} 