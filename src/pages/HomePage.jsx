import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getData } from "../redux/actions/productActions";
import Card from "../components/Card";
import { getBasket } from "../redux/actions/basketActions";

const HomePage = () => {
  //store abone ol
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    //SADECE BİR AKSİYON ÇALIŞTIRACAĞIZ
    //BU AKSİYON APİ İSTEĞİNİDE ARKA PLANDA YAPICAK
    dispatch(getData());

    //sepetteki verileri  al

    dispatch(getBasket());
  }, []);

  return (
    <div className="container">
      {/*Veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/*hata oluştuştuysa ekrana bas */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/*Veriler geldiyse ekrana bas */}
      <div className="d-flex flex-wrap gap-5 justify-content-center my-5 ">
        {store?.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
