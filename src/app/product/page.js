import ProductCard from "@/app/components/ProductCard";
import styles from "@/app/styles/product.module.css";

const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Error finding products");
  }
};

const page =async () => {
  const products = await getProducts();

  return (
    <>
      <div className={styles.cardContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default page;
