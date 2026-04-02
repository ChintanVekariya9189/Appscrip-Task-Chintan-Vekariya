'use client';

import React, { useState } from 'react';
import styles from './ProductFeed.module.css';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductFeedProps {
  initialProducts: Product[];
}

const ProductFeed: React.FC<ProductFeedProps> = ({ initialProducts }) => {
  const [showFilters, setShowFilters] = useState(true);
  const [products, setProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState('recommended');

  const toggleFilters = () => setShowFilters(!showFilters);

  // Simple sorting logic
  const handleSort = (sortType: string) => {
    setSortBy(sortType);
    let sorted = [...products];
    if (sortType === 'price-low-to-high') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-high-to-low') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortType === 'newest') {
      sorted.sort((a, b) => b.id - a.id);
    }
    setProducts(sorted);
  };

  return (
    <div className="container">
      {/* Metadata Bar */}
      <div className={styles.metaBar}>
        <div className={styles.itemCount}>
          <span>{products.length} ITEMS</span>
        </div>
        <div className={styles.toggleFilters} onClick={toggleFilters}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          <span>{showFilters ? 'HIDE FILTER' : 'SHOW FILTER'}</span>
        </div>
        <div className={styles.sortDropdown}>
          <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price-high-to-low">PRICE: HIGH TO LOW</option>
            <option value="price-low-to-high">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <div className={styles.contentLayout}>
        {showFilters && (
          <aside className={styles.sidebarWrapper}>
            <FilterSidebar />
          </aside>
        )}
        <main className={styles.gridWrapper}>
          <ProductGrid products={products} />
        </main>
      </div>
    </div>
  );
};

export default ProductFeed;
