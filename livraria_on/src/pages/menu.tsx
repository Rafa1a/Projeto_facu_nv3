import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
         Loja Next
        </Link>
        <div className="collapse navbar-collapse">
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
