import { useState, useEffect } from "react";
import ControleLivros from "../controle/ControleLivros";
import Livro from '../modelo/Livro';
import  ControleEditora  from "../controle/ControleEditora";


type Props = {}

const LinhaLivro = (props: {livro: Livro, excluir: (codLivro: number) => void}) => {
  const { livro, excluir } = props;
  const [nomeEditora, setNomeEditora] = useState<string>('');

  useEffect(() => {
    const controladorEditora = new ControleEditora();
    
    async function fetchEditoraName() {
      const nomeEditora = await controladorEditora.getNomeEditora(livro.codLivro);
      if (nomeEditora) {
        setNomeEditora(nomeEditora);
      }
    }
  
    fetchEditoraName();
  }, [livro.codLivro]);
   
  
  return (
    <tr key={livro.codLivro}>
      <td>
        <button onClick={() => excluir(livro.codLivro)}>Excluir</button>
      </td>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
     
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
     
    </tr>
  );
};

const LivroLista = (props: Props) => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();
    const getLivros = async () => {
      const livros = await controleLivro.obterLivros();
      const livrosComEditora = await Promise.all(
        livros.map(async (livro) => {
          const nomeEditora = await controleEditora.getNomeEditora(livro.codLivro);
          return { ...livro, nomeEditora };
        })
      );
      setLivros(livrosComEditora);
      setCarregado(true);
    };
    getLivros();
  }, [carregado]);

  const excluir = async (codLivro: number): Promise<void> => {
    const controleLivro = new ControleLivros();
    await controleLivro.excluir(codLivro);
    setCarregado(false);
  };
  

  return (
    <main>
      <h1>Livros</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Título</th>
            <th>Editora</th>
            <th>Gênero</th>
            <th>Autores</th>
            <th>Ano de publicação</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro livro={livro} excluir={excluir} key={livro.codLivro} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
