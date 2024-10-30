## Documentação do Projeto Livraria Online (Next.js)

Este projeto Next.js implementa uma livraria online simples, permitindo listar e cadastrar livros.  Utiliza a API do Next.js para lidar com requisições e gerencia os dados em arquivos JSON.

**Componentes Principais:**

* **`pages/index.tsx`:** Página inicial da aplicação.
* **`pages/menu.tsx`:** Componente de menu de navegação.
* **`pages/dados/LivroLista.tsx`:** Componente para listar os livros e excluir livros.
* **`pages/dados/LivroDados.tsx`:** Componente para cadastrar novos livros.
* **`pages/api/Livro/index.ts`:** API para obter todos os livros e incluir novos livros.
* **`pages/api/Livro/[codigo].ts`:** API para excluir um livro por código.
* **`pages/api/Editora/index.ts`:** API para obter todas as editoras.
* **`pages/api/Editora/[codEditora].ts`:** API para obter o nome de uma editora por código.

**Fluxo de Dados:**

1. **Listagem de Livros:**
    * O componente `LivroLista` busca os dados dos livros da API (`/api/Livro`).
    * Para cada livro, busca o nome da editora correspondente na API (`/api/Editora/[codEditora]`).
    * Renderiza a lista de livros com os nomes das editoras.

2. **Cadastro de Livros:**
    * O componente `LivroDados` busca os dados das editoras da API (`/api/Editora`) para preencher o select de editoras.
    * O usuário insere os dados do novo livro.
    * Ao submeter o formulário, envia uma requisição POST para a API (`/api/Livro`) com os dados do livro.
    * A API adiciona o novo livro ao arquivo `livro.json` e retorna o livro cadastrado.

3. **Exclusão de Livros:**
    * O componente `LivroLista` exibe um botão "Excluir" para cada livro.
    * Ao clicar no botão, envia uma requisição DELETE para a API (`/api/Livro/[codigo]`) com o código do livro.
    * A API remove o livro do arquivo `livro.json`.


**Pontos de Atenção:**

* **Gerenciamento de Dados:** Os dados são armazenados em arquivos JSON (`livro.json` e `editora.json`).  Isso não é ideal para aplicações de produção, pois não escala bem.  Recomenda-se usar um banco de dados.
* **Tratamento de Erros:** A API possui tratamento básico de erros, mas pode ser melhorado.
* **Validação de Dados:**  A validação de dados do formulário de cadastro de livros é limitada.  Deve ser aprimorada para garantir a integridade dos dados.
* **Performance:** A busca do nome da editora para cada livro na listagem pode impactar a performance.  Considerar otimizações como cache ou buscar todos os dados em uma única requisição.


**Próximos Passos:**

* Implementar um banco de dados para persistir os dados.
* Aprimorar o tratamento de erros e a validação de dados.
* Otimizar a performance da listagem de livros.
* Adicionar mais funcionalidades, como edição de livros, busca, etc.
* Implementar testes unitários e de integração.
* Melhorar a estilização e a usabilidade da aplicação.

**Deploy:**

O site está implantado em: https://projeto-facu-nv3.vercel.app/


Esta documentação fornece uma visão geral do projeto. Para mais detalhes, consulte o código-fonte.
