import ProductCard from 'components/ProductCard';
import ButtonSearch from 'components/ButtonSearch';
import './styles.css';

const Catalog = () => {
  return (
    <>
      <div className="home-container">
        <ButtonSearch/>
        <div className="container my-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
