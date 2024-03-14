import { useDispatch } from "react-redux";
import { removeItem, upDateItem } from "../redux/actions/basketActions";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-2 p-4 bg-white d-flex justify-content-between text-black mb-5">
      <div className="d-flezx align-items-center gap-3">
        <img className="rounded-3" width={60} height={60} src={product.image} />
        <h4>
          <span>{product.make}</span>
          <span>{product.model}</span>
        </h4>

        <h4 className="text-success">{product.price}$</h4>
      </div>

      <div className="d-flex align-items-center gap-3">
        <h6>Miktar: {product.amount}</h6>
        <button
          onClick={() => dispatch(upDateItem(product))}
          className="btn btn-sm btn-primary"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeItem(product.id))}
          className="btn btn-sm btn-danger"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
