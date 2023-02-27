import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { incluirLivro } from "../controle/ControleLivros";

import { getEditoras } from "../controle/ControleEditora";


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
    router.push("/")
    incluirLivro(livro);
    
    ;
  }

  return (
    <main className="container">
      <h1>Inclusão de livro</h1>

      <form onSubmit={incluir} className="mb-4">
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" value={titulo} onChange={(event) => setTitulo(event.target.value)} className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="resumo">Resumo:</label>
          <textarea id="resumo" value={resumo} onChange={(event) => setResumo(event.target.value)} className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="autores">Autores:</label>
          <textarea id="autores" value={autores} onChange={(event) => setAutores(event.target.value)} className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="codEditora">Editora:</label>
          <select id="codEditora" value={codEditora} onChange={tratarCombo} className="form-control">
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Incluir</button>
      </form>
    </main>
  );
}

export default LivroDados;
