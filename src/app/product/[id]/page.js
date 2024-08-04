"use client";
import { useEffect, useState } from "react";
import styles from "@/app/styles/singleProduct.module.css";
import Image from "next/image";
import TrendingSection from "@/app/components/TrendingSection";
import { useDispatch } from "react-redux";
import { add } from "@/app/redux/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingleProductPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState("");
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const DecCount = () => {
    if (count != 1) {
      setCount(count - 1);
    }
  };

  const IncCount = () => {
    if (count != 5) {
      setCount(count + 1);
    }
  };

  const hanldeCart = () => {
   
    dispatch(add({ ...product, quantity: count }));
    toast.success("Item added to Cart!", {
      position: "top-center",
      autoClose: 1700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: { fontSize: "17px", }
    });
    setCount(1)
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div style={{ fontSize: "2rem", color: "#1d72b8", display: "none" }}>
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className={styles.singleProductContainer}>
        <div className={styles.productLayout}>
          <div className={styles.imageContainer}>
            <Image
              width={200}
              height={200}
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
          </div>
          <div className={styles.detailsContainer}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>Price: ${product.price}</p>
            <div className={styles.cartSection}>
              <div className={styles.countSection}>
                <p className={styles.quant}> Quantity</p>
                <button onClick={IncCount}>+</button>
                <p className={styles.count}>{count}</p>
                <button onClick={DecCount}>-</button>
              </div>
              <div>
              <button className={styles.addToCartButton} onClick={hanldeCart}>
                Add to Cart
              </button>
               <ToastContainer/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrendingSection  />
    </>
  );
};

export default SingleProductPage;
