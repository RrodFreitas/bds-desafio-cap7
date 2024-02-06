import './styles.css';
import ProductImg from 'assets/images/car-product.png';
import 'bootstrap/js/dist/collapse';
import ProductInfo from 'components/ProductInfo';

const ProductCard = () => {
  return (
    <div className="base-card product-card-desafio">
        <div className="card-top-container-desafio">
            <img src={ProductImg} alt="Nome do Produto"/>
        </div>
        <div className="card-bottom-container-desafio">
            <h6>Nome do Produto</h6>
            <ProductInfo/>
        </div>
    </div>
  );
};

export default ProductCard;