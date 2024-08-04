"use client";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/cart.module.css";

const Checkout = () => {
  const state = useSelector((state) => state.cart);
  //   const dispatch = useDispatch();

  const calculateSubtotal = (price, quantity) => {
    return (price * quantity).toFixed(2); // Calculate subtotal
  };

  const calculateTotal = () => {
    return state.cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  const [isDifferentBillingAddress, setIsDifferentBillingAddress] = useState(false);

  const handleBillingAddressChange = () => {
    setIsDifferentBillingAddress(!isDifferentBillingAddress);
  };

  const formHandler=()=>{
   
    alert("Order placed Successfully!")
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.contactContainer}>
          <div className={styles.container}>
      <form className={styles.form} onSubmit={formHandler}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <input
            type="email"
            placeholder="Email or mobile phone number"
            className={styles.input}
            required
          />
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="newsOffers" className={styles.checkbox} />
            <label htmlFor="newsOffers" className={styles.checkboxLabel}>
              Email me with news and offers
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Delivery</h2>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="country" className={styles.label}>Country/Region</label>
              <select id="country" className={styles.input} required>
                <option value="Pakistan">Pakistan</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="First name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Last name"
                className={styles.input}
                required
              />
            </div>
          </div>
          <input type="text" placeholder="Address" className={styles.input} required />
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="City" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Postal code (optional)" className={styles.input} />
            </div>
          </div>
          <input type="text" placeholder="Phone" className={styles.input} required />
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="saveInfo" className={styles.checkbox} />
            <label htmlFor="saveInfo" className={styles.checkboxLabel}>
              Save this information for next time
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Shipping method</h2>
          <div className={styles.radioButton}>
            <input type="radio" id="standard" name="shipping" className={styles.radio} defaultChecked />
            <label htmlFor="standard" className={styles.radioLabel}>
              Standard - <strong>Free</strong>
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Payment</h2>
          <p className={styles.infoText}>All transactions are secure and encrypted.</p>
          <div className={styles.radioButton}>
            <input type="radio" id="cod" name="payment" className={styles.radio} defaultChecked />
            <label htmlFor="cod" className={styles.radioLabel}>
              Cash on Delivery (COD)
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Billing address</h2>
          <div className={styles.radioButton}>
            <input
              type="radio"
              id="sameAddress"
              name="billing"
              className={styles.radio}
              defaultChecked={!isDifferentBillingAddress}
              onChange={handleBillingAddressChange}
            />
            <label htmlFor="sameAddress" className={styles.radioLabel}>
              Same as shipping address
            </label>
          </div>
          <div className={styles.radioButton}>
            <input
              type="radio"
              id="differentAddress"
              name="billing"
              className={styles.radio}
              defaultChecked={isDifferentBillingAddress}
              onChange={handleBillingAddressChange}
            />
            <label htmlFor="differentAddress" className={styles.radioLabel}>
              Use a different billing address
            </label>
          </div>
        </div>
<div>
<button type="submit" className={styles.completeOrderButton}>
          Complete order
        </button>
</div>

      </form>
    </div>
        </div>

        <div className={styles.cartCont}>
          {state.cart.map((item) => {
            return (
              <div key={item.id}>
                <div className={styles.productDetails}>
                  <Image
                    src={item.image}
                    width={80}
                    alt={item.title}
                    height={80}
                    style={{ marginTop: "20px" }}
                  />
                  <h2>{item.title.slice(0, 10)}...</h2>
                  <h2>${item.price}</h2>
                </div>
              </div>
            );
          })}
          <div className={styles.totalSection}>
            <h2>Estimated Total: ${calculateTotal()}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
