import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={product.image} 
          alt={product.title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        {product.id % 5 === 0 && (
          <div className={styles.badge}>NEW PRODUCT</div>
        )}
        {product.id % 7 === 0 && (
          <div className={styles.outOfStock}>OUT OF STOCK</div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>{product.title}</h2>
          <button 
            className={styles.favoriteButton} 
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label="Add to favorites"
          >
            <svg 
              width="24" height="24" viewBox="0 0 24 24" 
              fill={isFavorite ? "#EB4C6B" : "none"} 
              stroke={isFavorite ? "#EB4C6B" : "currentColor"} 
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.89-8.89 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <p className={styles.pricing}>
          <a href="#">Sign in</a> or Create an account to see pricing
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
