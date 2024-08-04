
"use client";
import { useSelector, useDispatch } from "react-redux";
import { remove, updateQuantity } from "@/app/redux/CartSlice";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/cart.module.css";

const CartPage = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    
    dispatch(remove(id));

  };

  const updateItemQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    } else {
      removeHandler(id);
    }
  };

  const calculateSubtotal = (price, quantity) => {
    return (price * quantity).toFixed(2); // Calculate subtotal
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      {state.cart.length <= 0 ? (
        <h1 style={{textAlign:"center",margin:"15px"}}>Your Cart is Empty <Link href={"/product"} style={{ fontSize: "20px", fontWeight: "bold", textDecoration: "none", borderBottom: "2px solid black" }}>Buy Some Products</Link></h1>
      ) : (
        <div className={styles.cartContainer}>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map((item) => (
                <tr key={item.id} className={styles.cartSection}>
                  <td className={styles.productCell}>
                    <Image src={item.image} width={100} height={100} alt="Cart image" />
                    <span>{item.title.slice(0,10)} ...</span>
                  </td>
                  <td>${item.price}</td>
                  <td >
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} style={{padding:"11px 12px",border:"2px solid skyblue"}} className={styles.qbtn}>+</button>
                    <span style={{padding:"8px",fontSize:"16px"}}>{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}  style={{padding:"11px 12px",border:"2px solid skyblue"} } className={styles.qbtn}>-</button>
                  </td>
                  <td>${calculateSubtotal(item.price, item.quantity)}</td>
                  <td>
                    <div>
                    <button onClick={() => removeHandler(item.id)} className={styles.removeButton}>Remove</button>
                    </div>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.total}>
            <h2>Estimated Total: ${calculateTotal()}</h2>
            <Link href={"/Checkout"}>
            <button>Checkout</button>
            </Link>

          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
