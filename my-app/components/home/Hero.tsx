import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
            Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
