import Livro from '../modelo/Livro';

const baseURL = "https://projeto-facu-nv3.vercel.app/api/Livro"
const baseURLjson = "https://projeto-facu-nv3.vercel.app/livro.json"




async function obterLivros() {
  const response = await fetch(baseURLjson);
  const dados = await response.json();
  
  return dados;
}


 async function incluirLivro(livro: Livro): Promise<Livro> {
  
  // 1. Faz a requisição HTTP para adicionar o livro
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(livro)
  });

  const data = await response.json();
  console.log('Livro incluído com sucesso:', data);
  return data;
}

 

const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, {
    method: "DELETE"
  })
  const data = await response.json()
  return data.ok
}
export default {excluirLivro, obterLivros, incluirLivro}