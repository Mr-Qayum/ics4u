import { useStoreContext } from "../context";
import "./CartView.css";

function CartView() {

  const { cart, setCart } = useStoreContext();

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cart.entrySeq().map(([key, value]) => {
        return (
          <div className="cart-item" key={key}>
            <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt={value.title} />
            <h3>{value.title}</h3>
            <button className="remove-button" onClick={() => setCart((prevCart) => prevCart.delete(value.id))}>
              Remove
            </button>
          </div>
        )
      })}
    </div>
  );
}

export default CartView;