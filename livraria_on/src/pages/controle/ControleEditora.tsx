import Editora from '../modelo/Editora';

const editoras: Array<Editora> = [
  new Editora(1, 'Editora 1'),
  new Editora(2, 'Editora 2'),
  new Editora(3, 'Editora 3'),
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = editoras.find((editora) => editora.codEditora === codEditora);
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    }
    return undefined;
  }
}

export default ControleEditora;
