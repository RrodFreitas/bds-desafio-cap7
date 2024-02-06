import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import 'assets/styles/custom.scss';
import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container-desafio">
        <div className="home-card-desafio">
          <div className="home-content-container-desafio">
            <div>
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização de um
                sonho
              </p>
            </div>
          </div>
          <div className="home-image-container-desafio">
            <MainImage />
          </div>
        </div>
        <div>
          <a href="/products">
            <ButtonIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
