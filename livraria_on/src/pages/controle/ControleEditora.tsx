import Editora from '../modelo/Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Editora 1' },
  { codEditora: 2, nome: 'Editora 2' },
  { codEditora: 3, nome: 'Editora 3' },
];

export function getEditoras(): Array<Editora> {
  return editoras;
}

export function getNomeEditora(codEditora: number): string | undefined {
  const editoraEncontrada = editoras.find((editora) => editora.codEditora === codEditora);
  if (editoraEncontrada) {
    return editoraEncontrada.nome;
  }
  return undefined;
}


