import Livro from '../modelo/Livro';


const baseURL = "http://localhost:3000/api/Livro"


const arquivoLivros = '../livro.json'

async function obterLivros() {
  const response = await fetch(arquivoLivros);
  const dados = await response.json();
  
  return dados;
}
export async function incluirLivro(livro: Livro): Promise<Livro> {
  console.log('Enviando requisição de inclusão do livro:', livro);

  // 1. Faz a requisição HTTP para adicionar o livro
  const response = await fetch(arquivoLivros, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(livro)
  });

  // 2. Recebe a resposta da requisição HTTP
  const livroAdicionado = await response.json();

  // 3. Faz uma nova requisição HTTP para receber todos os livros cadastrados
  const livrosResponse = await fetch(baseURL);
  const livros = await livrosResponse.json();

  // 4. Adiciona o novo livro no objeto JSON recebido
  const maioresCodigos = Object.keys(livros).map(Number).sort((a, b) => b - a);
  const maiorCodigo = maioresCodigos.length > 0 ? maioresCodigos[0] : 0;
  livroAdicionado.codigo = maiorCodigo + 1;
  livros[livroAdicionado.codigo] = livroAdicionado;

  // 5. Faz uma nova requisição HTTP para enviar o objeto JSON atualizado
  await fetch(baseURL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(livros)
  });

  console.log('Livro incluído com sucesso:', livroAdicionado);
  
  // 6. Retorna o livro adicionado com o código gerado pelo servidor
  return livroAdicionado;
}

export async function atualizarLivro(livro: Livro): Promise<Livro | null> {
  console.log('Enviando requisição de atualização do livro:', livro);

  const response = await fetch(`${baseURL}/${livro.codigo}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(livro)
  });

  console.log('Recebida resposta da atualização do livro:', response);

  if (!response.ok) {
    console.error(`Erro ao atualizar livro: ${response.status} - ${response.statusText}`);
    return null;
  }

  const data = await response.json();

  console.log('Livro atualizado com sucesso:', data.livro);

  return data.livro;
}

const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, {
    method: "DELETE"
  })
  const data = await response.json()
  return data.ok
}
export {excluirLivro,obterLivros} 