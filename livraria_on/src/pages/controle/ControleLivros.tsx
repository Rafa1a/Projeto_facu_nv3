import Livro from '../modelo/Livro';
const baseURL = "http://localhost:3000/api/Livro"

const obterLivros = async (): Promise<Array<Livro>>  => {
  const response = await fetch(baseURL)
  const data = [await response.json()]
  
  return data
  
}

export async function incluirLivro(livro: Livro): Promise<Livro> {
  console.log('Enviando requisição de inclusão do livro:', livro);
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(livro)
  });
  console.log('Recebida resposta da inclusão do livro:', response);

  const data = await response.json();
  console.log('Dados retornados da inclusão do livro:', data);

  if (Array.isArray(data)) {
  if (data.length > 0) {
    const novoCodigo = data.reduce((maiorCodigo: number, livro: Livro) => {
      return livro.codigo > maiorCodigo ? livro.codigo : maiorCodigo;
    }, 0) + 1;
    livro.codigo = novoCodigo;
    console.log('Livro incluído com sucesso:', livro);
  } else {
    console.log('Erro ao incluir livro: Nenhum livro foi retornado pela API');
  }
} else {
  console.log('Erro ao incluir livro: A resposta da API não é um array');
}
return livro
}

  

const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, {
    method: "DELETE"
  })
  const data = await response.json()
  return data.ok
}
export {excluirLivro,obterLivros} 