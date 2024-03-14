import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";
import { thunk } from "redux-thunk";

//reducerleri birleştir
const rootReduer = combineReducers({
  products: productReducer,
  basket: basketReducer,
});

//store oluşturduk direk export ettik
//applymiddleware fonksiyonu bir arayazılımı reduxa dahil etmeye yarar
//thunk arayazılımı reduxa dahil ettik
export default createStore(rootReduer, applyMiddleware(thunk));

//bu yöntemde kullanılabilir consta ettıp export edilir
//biraz daha uzun bu yöntem
//const store=createStore(rootReduer)
