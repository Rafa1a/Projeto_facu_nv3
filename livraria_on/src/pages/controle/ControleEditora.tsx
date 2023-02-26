import Editora from '../modelo/Editora';

export async function getEditoras(): Promise<Array<Editora>> {
  const response = await fetch(`http://localhost:3000/api/Editora`);
  const data = await response.json();

  if (Array.isArray(data)) {
    return data;
  } else {
    console.log('Erro ao obter editoras:', data);
    return [];
  }
}

export async function getNomeEditora(codEditora: number): Promise<string | undefined> {
  const response = await fetch(`http://localhost:3000/api/Editora/${codEditora}`);
  const data = await response.json();
  if (data) {
    return data.nome;
  }
  return undefined;
}


