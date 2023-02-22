
class Livro {
  codigo: number;
  codLivro: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
    codigo: number,
    codLivro: number,
    titulo: string,
    resumo: string,
    autores: string[]
  ) {
    this.codigo = codigo;
    this.codLivro = codLivro;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}

export default Livro;
