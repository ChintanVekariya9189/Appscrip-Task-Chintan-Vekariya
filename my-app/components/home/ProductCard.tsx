"use client";

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
  const [imgSrc, setImgSrc] = useState(product.image);

  const fallbackImage = 'https://placehold.co/400x400?text=No+Image';

  // Function to check if a URL is valid for Next.js Image (must be absolute or start with /)
  const isValidUrl = (url: string) => {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return url.startsWith('/') || url.startsWith('http');
    }
  };

  const finalSrc = isValidUrl(imgSrc) ? imgSrc : fallbackImage;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={finalSrc} 
          alt={product.title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
          onError={() => setImgSrc(fallbackImage)}
          unoptimized={finalSrc?.includes('placehold.co')}
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
          <h3 className={styles.title}>{product.title}</h3>
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
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
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
