import { useStoreContext } from "../context";
import { firestore } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import "./Cartview.css";

function CartView() {
  const { user, cart, setCart } = useStoreContext();

  const checkout = async () => {
    const docRef = doc(firestore, "users", user.uid);
    await setDoc(docRef, cart.toJS());

    // Code to read from Friestore
    // const docRef = doc(firestore, "users", user.uid);
    // const data = (await getDoc(docRef)).data();
    // const cart = Map(data);
  }

  return (
    <div className="cart-view">
      <h1>Shopping Cart</h1>
      <button onClick={() => checkout()}>Checkout</button>
      <div className="cart-items">
        {
          cart.entrySeq().map(([key, value]) => {
            return (
              <div className="cart-item" key={key}>
                <img src={`https://image.tmdb.org/t/p/w500${value.url}`} />
                <h1>{value.title}</h1>
                <button onClick={() => setCart((prevCart) => prevCart.delete(key))}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CartView;