import Image from 'next/image';
import styles from "@/app/styles/product.module.css";
import Link from 'next/link';
const ProductCard = ({ id,image, title, description, price, rating }) => {
  const { rate, count } = rating; 
  const maxStars = 5;


    return (
      <>
      <div className={styles.productCard}>
      <Image
        src={image}
        alt={title}
        width={200} // Adjust width as needed
        height={200} // Adjust height as needed
    
      />
      <div className={styles.productDetails}>
        <Link className={styles.productTitle} href={`/product/${id}` }>
        {title}
        </Link>
        <p className={styles.productDescription}>{description.slice(0,150)}...</p>
        <div className={styles.productPriceRating}>
          <span className={styles.productPrice}>${price.toFixed(2)}</span>
          <div className={styles.productRating}>
            {[...Array(maxStars)].map((_, i) => (
              <span key={i} className={i < rate ? styles.starFilled : styles.starEmpty}>★</span>
            ))}
            <span>({count})</span>
          </div>
        </div>
            <Link href={`/product/${id}`}>
        <button className={styles.btn}>
            Buy Now
        </button>
            </Link>
      </div>
    </div>
      </>
    );
  };


export default ProductCard;
