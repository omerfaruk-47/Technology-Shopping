const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };

    case "SET_BASKET_LOADING":
      return { ...state, isLoading: true };

    case "SET_BASKET_ERROR":
      return { ...state, isLoading: false, isError: action.payload };

    case "SET_BASKET_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };

    case "UPDATE":
      //1) güncellenecek dizin kopyasını oluşturmak
      const cloneBasket = [...state.basket];

      //2)güncellenecek elemanın dizindeki sırasını bul
      const founId = cloneBasket.findIndex(
        (item) => item.id === action.payload
      );
      //3)elemanın miktarını 1 artır
      cloneBasket[founId].amount++;

      //alternatif çözüm..
      // cloneBasket.splice(founId, 1, {
      //   ...cloneBasket[founId],
      //   amount: cloneBasket[founId.amount + 1],
      // });

      //4)state'i güncelle
      return { ...state, basket: cloneBasket };

    case "DELETE":
      const filtred = state.basket.filter((item) => item.id !== action.payload);
      return { ...state, basket: filtred };

    default:
      return state;
  }
};

export default basketReducer;
