import { Link } from "react-router-dom";

const Cart = ({ mapCart }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      <div>{mapCart}</div>
      <Link to="/checkout">Checkout</Link>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default Cart;
