//API dan ürün verileirini al
//ve yüklenme durumunu hata durumunu
//ve gelen verileir store da saklayacağız

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productActions";
import Loader from "../components/Loader";

const MainPage = () => {
  //store abone ol
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    //1) isteğin başladığını store bildir
    dispatch(setLoading());
    axios
      .get("http://localhost:3040/products")
      //2)isteğin başarılı olduğunu store bildir
      .then((res) => dispatch(setProducts(res.data)))
      //3)isteğin başarısızz olduğunu store bildir
      .catch((err) => dispatch(setError(err.message)));
  }, []);
  return (
    <div className="container p-5">
      {/*Veriler yükleniyorsa */}
      {store.isLoading && <Loader />}

      {/*hata oluştuştuysa ekrana bas */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/*Veriler geldiyse ekrana bas */}

      {store?.products.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default MainPage;
