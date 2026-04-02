'use client';

import React, { useState, useMemo } from 'react';
import styles from './ProductFeed.module.css';
import FilterSidebar, { ActiveFilters, FilterKey } from './FilterSidebar';
import ProductGrid from './ProductGrid';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

/* ── Enriched product with filter attributes ──────── */
interface EnrichedProduct extends Product {
  occasion: string[];
  work: string[];
  fabric: string[];
  segment: string[];
  suitableFor: string[];
  rawMaterials: string[];
  pattern: string[];
}

/* ── Attribute mappings based on category ─────────── */
const CATEGORY_ATTRIBUTES: Record<string, {
  occasion: string[];
  work: string[];
  fabric: string[];
  segment: string[];
  suitableFor: string[];
  rawMaterials: string[];
  pattern: string[];
}> = {
  Clothes: {
    occasion: ['Casual', 'Formal', 'Party'],
    work: ['Office', 'Outdoor'],
    fabric: ['Cotton', 'Polyester', 'Linen'],
    segment: ['Premium', 'Budget'],
    suitableFor: ['Daily Wear', 'Sports'],
    rawMaterials: ['Natural', 'Blended'],
    pattern: ['Solid', 'Striped', 'Printed'],
  },
  Electronics: {
    occasion: ['Daily Use', 'Professional'],
    work: ['Office', 'Home'],
    fabric: ['N/A'],
    segment: ['Premium', 'Luxury'],
    suitableFor: ['Daily Wear', 'Travel'],
    rawMaterials: ['Synthetic', 'Metal'],
    pattern: ['Solid'],
  },
  Furniture: {
    occasion: ['Home Decor', 'Casual'],
    work: ['Home', 'Office'],
    fabric: ['Leather', 'Wood'],
    segment: ['Luxury', 'Premium'],
    suitableFor: ['Home', 'Office'],
    rawMaterials: ['Natural', 'Synthetic'],
    pattern: ['Solid', 'Textured'],
  },
  Shoes: {
    occasion: ['Casual', 'Sports', 'Formal'],
    work: ['Outdoor', 'Office'],
    fabric: ['Leather', 'Synthetic'],
    segment: ['Premium', 'Budget'],
    suitableFor: ['Daily Wear', 'Sports', 'Travel'],
    rawMaterials: ['Natural', 'Synthetic'],
    pattern: ['Solid', 'Printed'],
  },
  Miscellaneous: {
    occasion: ['Casual', 'Daily Use'],
    work: ['Home', 'Outdoor'],
    fabric: ['Mixed'],
    segment: ['Budget'],
    suitableFor: ['Daily Wear', 'Travel'],
    rawMaterials: ['Blended'],
    pattern: ['Solid', 'Checked'],
  },
};

const DEFAULT_ATTRIBUTES = {
  occasion: ['Casual'],
  work: ['Home'],
  fabric: ['Mixed'],
  segment: ['Budget'],
  suitableFor: ['Daily Wear'],
  rawMaterials: ['Blended'],
  pattern: ['Solid'],
};

/** Assign 1-2 random but deterministic attributes per product per field */
function enrichProduct(product: Product): EnrichedProduct {
  const attrs = CATEGORY_ATTRIBUTES[product.category] || DEFAULT_ATTRIBUTES;
  const pick = (arr: string[], seed: number): string[] => {
    if (arr.length <= 1) return arr;
    // deterministic pick based on product id
    const idx1 = seed % arr.length;
    const idx2 = (seed + 3) % arr.length;
    return idx1 === idx2 ? [arr[idx1]] : [arr[idx1], arr[idx2]];
  };

  return {
    ...product,
    occasion: pick(attrs.occasion, product.id),
    work: pick(attrs.work, product.id + 1),
    fabric: pick(attrs.fabric, product.id + 2),
    segment: pick(attrs.segment, product.id + 3),
    suitableFor: pick(attrs.suitableFor, product.id + 4),
    rawMaterials: pick(attrs.rawMaterials, product.id + 5),
    pattern: pick(attrs.pattern, product.id + 6),
  };
}

/** Collect all unique values for a given field across products */
function collectOptions(products: EnrichedProduct[], key: string): string[] {
  const set = new Set<string>();
  products.forEach((p) => {
    const val = (p as any)[key];
    if (Array.isArray(val)) val.forEach((v: string) => set.add(v));
    else if (typeof val === 'string') set.add(val);
  });
  return [...set].sort();
}

/* ── Filter keys that map to array fields ─────────── */
const ARRAY_FILTER_KEYS: FilterKey[] = [
  'occasion', 'work', 'fabric', 'segment', 'suitableFor', 'rawMaterials', 'pattern',
];

interface ProductFeedProps {
  initialProducts: Product[];
}

const ProductFeed: React.FC<ProductFeedProps> = ({ initialProducts }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  /* ── Enrich products with filter attributes ──────── */
  const enrichedProducts = useMemo(
    () => initialProducts.map(enrichProduct),
    [initialProducts],
  );

  /* ── Derive all filter options from enriched data ── */
  const filterOptions = useMemo(() => {
    const opts: Record<FilterKey, string[]> = {
      categories: [...new Set(enrichedProducts.map((p) => p.category))].sort(),
      occasion: collectOptions(enrichedProducts, 'occasion'),
      work: collectOptions(enrichedProducts, 'work'),
      fabric: collectOptions(enrichedProducts, 'fabric'),
      segment: collectOptions(enrichedProducts, 'segment'),
      suitableFor: collectOptions(enrichedProducts, 'suitableFor'),
      rawMaterials: collectOptions(enrichedProducts, 'rawMaterials'),
      pattern: collectOptions(enrichedProducts, 'pattern'),
    };
    return opts;
  }, [enrichedProducts]);

  const priceBounds = useMemo(() => {
    if (enrichedProducts.length === 0) return { min: 0, max: 1000 };
    const prices = enrichedProducts.map((p) => p.price);
    return { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) };
  }, [enrichedProducts]);

  /* ── Filter state ─────────────────────────────────── */
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    categories: [],
    priceRange: priceBounds,
    customizable: false,
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: [],
  });

  /* ── Filtered + sorted products ────────────────────── */
  const filteredProducts = useMemo(() => {
    let result = [...enrichedProducts];

    // Category filter
    if (activeFilters.categories.length > 0) {
      result = result.filter((p) => activeFilters.categories.includes(p.category));
    }

    // Array-based attribute filters
    for (const key of ARRAY_FILTER_KEYS) {
      const selected = activeFilters[key] as string[];
      if (selected.length > 0) {
        result = result.filter((p) => {
          const productValues: string[] = (p as any)[key];
          return productValues.some((v) => selected.includes(v));
        });
      }
    }

    // Price range filter
    result = result.filter(
      (p) =>
        p.price >= activeFilters.priceRange.min &&
        p.price <= activeFilters.priceRange.max,
    );

    // Sorting
    if (sortBy === 'price-low-to-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-to-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [enrichedProducts, activeFilters, sortBy]);

  const toggleFilters = () => setShowFilters(!showFilters);

  const resetFilters = () =>
    setActiveFilters({
      categories: [],
      priceRange: priceBounds,
      customizable: false,
      occasion: [],
      work: [],
      fabric: [],
      segment: [],
      suitableFor: [],
      rawMaterials: [],
      pattern: [],
    });

  return (
    <div className="container">
      {/* Metadata Bar */}
      <div className={styles.metaBar}>
        <div className={styles.itemCount}>
          <span>{filteredProducts.length} ITEMS</span>
        </div>
        <div className={styles.toggleFilters} onClick={toggleFilters}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          <span>{showFilters ? 'HIDE FILTER' : 'SHOW FILTER'}</span>
        </div>
        <div className={styles.sortDropdown}>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
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
            <FilterSidebar
              filterOptions={filterOptions}
              activeFilters={activeFilters}
              priceRange={priceBounds}
              onFilterChange={setActiveFilters}
            />
          </aside>
        )}
        <main className={styles.gridWrapper}>
          {filteredProducts.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No products match your filters.</p>
              <button className={styles.resetButton} onClick={resetFilters}>
                Reset Filters
              </button>
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductFeed;
