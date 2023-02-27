import Link from 'next/link';

 const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
         Loja Next
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dados/LivroLista" className="nav-link">
                Livros
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dados/Livrodados" className="nav-link">
                Novo Livro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu