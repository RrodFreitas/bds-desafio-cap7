import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/dist/collapse';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#desafio-navbar"
          aria-controls="desafio-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="desafio-navbar">
          <ul className="navbar-nav offset-lg-10 main-menu">
            <li>
              <a href="link" className="active">Home</a>
            </li>
            <li>
              <a href="/link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
