import React, { useState } from 'react';
import styles from './FilterSidebar.module.css';

interface FilterSectionProps {
  title: string;
  options?: string[];
  defaultOpen?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options = ['All'], defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.filterSection}>
      <div className={styles.sectionHeader} onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h3 className={styles.sectionTitle}>{title}</h3>
          <p className={styles.sectionSubtitle}>All</p>
        </div>
        <svg 
          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={isOpen ? styles.rotate : ''}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      {isOpen && (
        <div className={styles.sectionContent}>
          <button className={styles.unselectLink}>Unselect all</button>
          <div className={styles.optionsList}>
            {['Men', 'Women', 'Baby & Kids'].map((opt) => (
              <label key={opt} className={styles.checkboxLabel}>
                <input type="checkbox" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const FilterSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.customizable}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" />
          <span className={styles.customizableText}>CUSTOMIZABLE</span>
        </label>
      </div>

      <FilterSection title="IDEAL FOR" />
      <FilterSection title="OCCASION" />
      <FilterSection title="WORK" />
      <FilterSection title="FABRIC" />
      <FilterSection title="SEGMENT" />
      <FilterSection title="SUITABLE FOR" />
      <FilterSection title="RAW MATERIALS" />
      <FilterSection title="PATTERN" />
    </div>
  );
};

export default FilterSidebar;
