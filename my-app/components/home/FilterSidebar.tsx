'use client';

import React, { useState } from 'react';
import styles from './FilterSidebar.module.css';

/* ── Shared types ────────────────────────────────── */
export interface ActiveFilters {
  categories: string[];
  priceRange: { min: number; max: number };
  customizable: boolean;
  occasion: string[];
  work: string[];
  fabric: string[];
  segment: string[];
  suitableFor: string[];
  rawMaterials: string[];
  pattern: string[];
}

export type FilterKey = keyof Omit<ActiveFilters, 'priceRange' | 'customizable'>;

interface FilterSidebarProps {
  filterOptions: Record<FilterKey, string[]>; // available options per key
  activeFilters: ActiveFilters;
  priceRange: { min: number; max: number };
  onFilterChange: (filters: ActiveFilters) => void;
}

/* ── Checkbox filter section ─────────────────────── */
interface FilterSectionProps {
  title: string;
  filterKey: FilterKey;
  options: string[];
  selected: string[];
  isOpen: boolean;
  onToggle: () => void;
  onChange: (key: FilterKey, selected: string[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  filterKey,
  options,
  selected,
  isOpen,
  onToggle,
  onChange,
}) => {

  const toggleOption = (opt: string) => {
    if (selected.includes(opt)) {
      onChange(filterKey, selected.filter((s) => s !== opt));
    } else {
      onChange(filterKey, [...selected, opt]);
    }
  };

  const subtitle =
    selected.length === 0 || selected.length === options.length
      ? 'All'
      : selected.join(', ');

  return (
    <div className={styles.filterSection}>
      <div className={styles.sectionHeader} onClick={onToggle}>
        <div>
          <h3 className={styles.sectionTitle}>{title}</h3>
          <p className={styles.sectionSubtitle}>{subtitle}</p>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={isOpen ? styles.rotate : ''}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      {isOpen && (
        <div className={styles.sectionContent}>
          <button
            className={styles.unselectLink}
            onClick={() => onChange(filterKey, [])}
          >
            Unselect all
          </button>
          <div className={styles.optionsList}>
            {options.map((opt) => (
              <label key={opt} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selected.includes(opt)}
                  onChange={() => toggleOption(opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Price range section ──────────────────────────── */
interface PriceRangeSectionProps {
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  onChange: (min: number, max: number) => void;
}

const PriceRangeSection: React.FC<PriceRangeSectionProps & { isOpen: boolean; onToggle: () => void }> = ({
  min,
  max,
  currentMin,
  currentMax,
  onChange,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={styles.filterSection}>
      <div className={styles.sectionHeader} onClick={onToggle}>
        <div>
          <h3 className={styles.sectionTitle}>PRICE RANGE</h3>
          <p className={styles.sectionSubtitle}>
            ${currentMin} – ${currentMax}
          </p>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={isOpen ? styles.rotate : ''}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      {isOpen && (
        <div className={styles.sectionContent}>
          <div className={styles.priceRangeContainer}>
            <div className={styles.rangeLabels}>
              <span>${currentMin}</span>
              <span>${currentMax}</span>
            </div>
            <div className={styles.rangeSliderGroup}>
              <input
                type="range"
                min={min}
                max={max}
                value={currentMin}
                className={styles.rangeSlider}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val <= currentMax) onChange(val, currentMax);
                }}
              />
              <input
                type="range"
                min={min}
                max={max}
                value={currentMax}
                className={styles.rangeSlider}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= currentMin) onChange(currentMin, val);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Filter section config ────────────────────────── */
const FILTER_SECTIONS: { title: string; key: FilterKey }[] = [
  { title: 'IDEAL FOR', key: 'categories' },
  { title: 'OCCASION', key: 'occasion' },
  { title: 'WORK', key: 'work' },
  { title: 'FABRIC', key: 'fabric' },
  { title: 'SEGMENT', key: 'segment' },
  { title: 'SUITABLE FOR', key: 'suitableFor' },
  { title: 'RAW MATERIALS', key: 'rawMaterials' },
  { title: 'PATTERN', key: 'pattern' },
];

/* ── Main sidebar ─────────────────────────────────── */
const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filterOptions,
  activeFilters,
  priceRange,
  onFilterChange,
}) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (key: string) =>
    setOpenSection((prev) => (prev === key ? null : key));

  const updateFilter = (key: FilterKey, values: string[]) =>
    onFilterChange({ ...activeFilters, [key]: values });

  const updatePrice = (min: number, max: number) =>
    onFilterChange({ ...activeFilters, priceRange: { min, max } });

  const toggleCustomizable = () =>
    onFilterChange({ ...activeFilters, customizable: !activeFilters.customizable });

  return (
    <div className={styles.sidebar}>
      {/* Customizable toggle */}
      <div className={styles.customizable}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={activeFilters.customizable}
            onChange={toggleCustomizable}
          />
          <span className={styles.customizableText}>CUSTOMIZABLE</span>
        </label>
      </div>

      {/* All filter sections */}
      {FILTER_SECTIONS.map(({ title, key }) => (
        <FilterSection
          key={key}
          title={title}
          filterKey={key}
          options={filterOptions[key] || []}
          selected={activeFilters[key] as string[]}
          isOpen={openSection === key}
          onToggle={() => toggleSection(key)}
          onChange={updateFilter}
        />
      ))}

      {/* Price range */}
      <PriceRangeSection
        min={priceRange.min}
        max={priceRange.max}
        currentMin={activeFilters.priceRange.min}
        currentMax={activeFilters.priceRange.max}
        onChange={updatePrice}
        isOpen={openSection === 'priceRange'}
        onToggle={() => toggleSection('priceRange')}
      />
    </div>
  );
};

export default FilterSidebar;
