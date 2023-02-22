import { useState, useEffect } from "react";
import {obterLivros, incluirLivro} from "../controle/ControleLivros";
import Livro from '../modelo/Livro';
import  {getEditoras,getNomeEditora}  from "../controle/ControleEditora";


type Props = {}

const LinhaLivro = (props: {livro: Livro, excluir: (codLivro: number) => void}) => {
  const { livro, excluir } = props;
  const [nomeEditora, setNomeEditora] = useState<string>('');

  useEffect(() => {
    
    
    async function fetchEditoraName() {
      const nome = await getNomeEditora(livro.codLivro);
      if (nome) {
        setNomeEditora(nome);
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
      <td>{livro.resumo}</td>
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
    
    const getLivros = async () => {
      const livros = await obterLivros();
      const livrosComEditora = await Promise.all(
        livros.map(async (livro) => {
          const nomeEditora = await getNomeEditora(livro.codLivro);
          return { ...livro, nomeEditora };
        })
      );
      setLivros(livrosComEditora);
      setCarregado(true);
    };
    getLivros();
  }, [carregado]);

 
  const excluir = (codigo: number): void => {
    const livrosAtualizados = livros.filter(livro => livro.codLivro !== codigo);
    setLivros(livrosAtualizados);
  }
  

  return (
    <main>
      <h1>Livros</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
            
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
