"use client"
import { useEffect, useState } from 'react';
import ProductCard from '@/app/components/ProductCard';
import styles from '@/app/styles/category.module.css';

const CategoryPage = ({ params }) => {
  const { category } = params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      const fetchProductsByCategory = async () => {
        try {
          setLoading(true);
          const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching products:', error);
          setLoading(false);
        }
      };
      fetchProductsByCategory();
    }
  }, [category]);

  if (loading) {
    return <div className={styles.loading} style={{fontSize:"2rem",color:"#1d72b8",display:"none"}}>Loading..</div>;
  }

  return (
    <div className={styles.categoryPageContainer}>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
