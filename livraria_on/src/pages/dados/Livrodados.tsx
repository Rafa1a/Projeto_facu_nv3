import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { obterLivros, incluirLivro } from "../controle/ControleLivros";
import Livro from "../modelo/Livro";
import { getEditoras, getNomeEditora } from "../controle/ControleEditora";
import Editora from "../modelo/Editora";

interface Opcao {
  value: number;
  text: string;
}

function LivroDados() {
  const router = useRouter();

  const [opcoes, setOpcoes] = useState<Opcao[]>([]);
  const [codEditora, setCodEditora] = useState(0);


  useEffect(() => {
  async function fetchOpcoes() {
    const editoras = await getEditoras();
      
    const opcoesFormatadas = editoras.map((editora) => ({
      value: editora.codEditora,
      text: editora.nome,
    }));
    setOpcoes(opcoesFormatadas);
    setCodEditora(opcoesFormatadas.length > 0 ? opcoesFormatadas[0].value : 0);
  }

    fetchOpcoes();
    }, []);

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [livrosCadastrados, setLivrosCadastrados] = useState<Livro[]>([]);

  function tratarCombo(event: React.ChangeEvent<HTMLSelectElement>) {
    setCodEditora(parseInt(event.target.value));
  }
 

  function incluir(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const livro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split("\n"),
      codLivro: codEditora,
    };
    
    incluirLivro(livro);

    ;
  }

  return (
    <main>
      <h1>Inclusão de livro</h1>

      <form onSubmit={incluir}>
        <label htmlFor="titulo">Título:</label>
        <input type="text" id="titulo" value={titulo} onChange={(event) => setTitulo(event.target.value)} />

        <label htmlFor="resumo">Resumo:</label>
        <textarea id="resumo" value={resumo} onChange={(event) => setResumo(event.target.value)} />

        <label htmlFor="autores">Autores:</label>
        <textarea id="autores" value={autores} onChange={(event) => setAutores(event.target.value)} />

        <label htmlFor="codEditora">Editora:</label>
        <select id="codEditora" value={codEditora} onChange={tratarCombo}>
          {opcoes.map((opcao) => (
            <option key={opcao.value} value={opcao.value}>
              {opcao.text}
            </option>
          ))}
        </select>

        <button type="submit">Incluir</button>
      </form>
    </main>
  );
}

export default LivroDados;
