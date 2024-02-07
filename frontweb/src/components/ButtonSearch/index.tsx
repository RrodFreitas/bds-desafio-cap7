import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/dist/collapse';

const ButtonSearch = () => {
  return (
    <div className="btn-search-container">
      <input type="text" defaultValue="Digite sua busca" className="input-icon"></input>
      <div className="btn-search-icon-container">BUSCAR</div>
    </div>
  );
};

export default ButtonSearch;
