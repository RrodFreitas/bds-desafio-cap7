import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/dist/collapse';

const ButtonSearch = () => {
  return (
    <div className="btn-search-container">
      <textarea className="input-icon"></textarea>
      <div className="btn-search-icon-container">BUSCAR</div>
    </div>
  );
};

export default ButtonSearch;
