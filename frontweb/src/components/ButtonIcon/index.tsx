import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/dist/collapse';

const ButtonIcon = () => {
  return (
    <div className="btn-container-desafio">
        <button className="btn btn-primary btn-icon-desafio">
          <h6>Ver Catálogo</h6>
        </button>
        <div className="btn-description-text">
          <p>Comece agora a navegar</p>
        </div>
    </div>
  );
};

export default ButtonIcon;