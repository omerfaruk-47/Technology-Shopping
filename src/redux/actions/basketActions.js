//!Asenkron Aksiyon | Thunk Aksiyonu

import axios from "axios";

//Sepete yeni eleman ekleme işini yapıcak
//Önce api post isteği ile elemanı ekleyecek
//api eklenirse store da ekleyecek

export const addToBasket = (product) => async (dispatch) => {
  // 1) yeni bir nesne oluşturup miktarını 1 olarak belirle
  const newProduct = { ...product, amount: 1 };

  // 2) nesneden gereksiz değerleri kaldır
  delete newProduct.specs;
  delete newProduct.color;
  delete newProduct.title;
  delete newProduct.stockAmount;

  // 3) ürünü api'a kaydet
  const res = await axios.post("http://localhost:3040/basket", newProduct);

  // 4) store'a yeni ürünü ekle
  dispatch({
    type: "ADD",
    payload: newProduct,
  });
};

//apiden sepet verilerini alıp aşama aşama
//(yüklenme/başarılı olma/hata oluşma) storu bilgilendiren
//asnkron thunk aksiyonu
export const getBasket = () => (dispatch) => {
  dispatch({
    type: "SET_BASKET_LOADING",
  });

  axios
    .get("http://localhost:3040/basket")
    .then((res) =>
      dispatch({
        type: "SET_BASKET_DATA",
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "SET_BASKET_ERROR",
        payload: err.message,
      })
    );
};

//sepette var olan ürünün miktarını 1 arttırmak
export const upDateItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3040/basket/${product.id}`, {
      amount: product.amount + 1,
    })
    //istek başarılı olduğunda reducer haber ver
    .then(() =>
      dispatch({
        type: "UPDATE",
        payload: product.id,
      })
    );
};

//Ürünü sepetten kalıdırmak

export const removeItem = (delete_id) => (dispatch) => {
  axios
    .delete(`http://localhost:3040/basket/${delete_id}`)
    //işlem başarılı olursa reducer haber ver
    .then(() =>
      dispatch({
        type: "DELETE",
        payload: delete_id,
      })
    );
};
