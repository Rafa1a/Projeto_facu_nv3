import { useState, useEffect } from "react";
import controleL from "../controle/ControleLivros";


import Livro from '../../../public/modelo/Livro';
import  controleE  from "../controle/ControleEditora";


type Props = {}

const LinhaLivro = (props: {livro: Livro, excluir: (codLivro: number) => void}) => {
  const { livro, excluir } = props;
  const [nomeEditora, setNomeEditora] = useState<string>('');

  useEffect(() => {
    
    
    async function fetchEditoraName() {
      const nome = await controleE.getNomeEditora(livro.codLivro);
      if (nome) {
        setNomeEditora(nome);
        if (typeof nome === 'object') return null;
      }
    }
  
    fetchEditoraName();
  }, [livro.codLivro]);
   
  
  
  return (
    <tr key={livro.codigo}>
      <td>
        <button onClick={() => excluir(livro.codigo)} className="btn btn-danger">Excluir</button>
      </td>
      <td>{livro.titulo}</td>
      <td>{Object.keys(nomeEditora).length > 0 ? nomeEditora : 'Nenhuma Editora encontrada'}</td>

      <td>{livro.resumo}</td>
      <td>
      <ul>
      {livro.autores && livro.autores.map((autor, index) => (
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
      const livros = await controleL.obterLivros();
      if(Object.keys(livros).length === 0){
        console.log("nenhum livro encontrado")
      }else
      {const livrosComEditora = await Promise.all(
        livros.map(async (livro:Livro) => {
          const nomeEditora = await controleE.getNomeEditora(livro.codLivro);
          return { ...livro, nomeEditora };
        })
      );
      setLivros(livrosComEditora);
      setCarregado(true);}
    };
    getLivros();
  }, [carregado]);

 
  const excluir = async (codigo: number)=> {
    const result = await controleL.excluirLivro(codigo)
    //const livrosAtualizados = livros.filter(livro => livro.codLivro !== codigo,0);
    console.log(result)
    setCarregado(false)
  }
  

  return (
    <main>
      <h1>Livros</h1>
      <table className="table">
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
  {livros.length > 0 ? (
    livros.map((livro) => (
      <LinhaLivro livro={livro} excluir={excluir} key={livro.codigo} />
    ))
  ) : (
    <tr>
      <td colSpan={5}></td>
    </tr>
  )}
</tbody>
      </table>
    </main>
  );
};

export default LivroLista;
