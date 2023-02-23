import Editora from '../modelo/Editora';

export async function getEditoras(): Promise<Array<Editora>> {
  const response = await fetch('http://localhost:3000/api/editoras');
  const data = await response.json();
  return data;
}

export async function getNomeEditora(codEditora: number): Promise<string | undefined> {
  const response = await fetch(`http://localhost:3000/api/editoras/${codEditora}`);
  const data = await response.json();
  if (data) {
    return data.nome;
  }
  return undefined;
}


