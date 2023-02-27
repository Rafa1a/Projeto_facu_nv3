import Editora from '../modelo/Editora';
const baseURL = `http://localhost:3000/editora.json`

 async function getEditoras(): Promise<Array<Editora>> {
  const response = await fetch(baseURL);
  const data = await response.json();

  if (Array.isArray(data)) {
    return data;
  } else {
    console.log('Erro ao obter editoras:', data);
    return [];
  }
}

 async function getNomeEditora(codEditora: number): Promise<string | undefined> {
  const response = await fetch(baseURL, {
    method: "GET"
  });
  const data = await response.json();
  const valor = data.find((e:Editora) => e.codEditora === codEditora)
    return valor.nome;
  
}


export default {getEditoras,getNomeEditora}