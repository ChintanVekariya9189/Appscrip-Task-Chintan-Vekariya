import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* ── TOP SECTION ── */}
        <div className={styles.topSection}>
          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3 className={styles.sectionTitle}>BE THE FIRST TO KNOW</h3>
            <p className={styles.subtitle}>
              Sign up for updates from mettā muse.
            </p>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.input}
              />
              <button className={styles.subscribeBtn}>SUBSCRIBE</button>
            </div>
          </div>

          {/* Contact + Currency */}
          <div className={styles.contact}>
            <div>
              <h3 className={styles.sectionTitle}>CONTACT US</h3>
              <p className={styles.contactInfo}>+44 221 133 5360</p>
              <p className={styles.contactInfo}>customercare@mettamuse.com</p>
            </div>

            <div>
              <h3 className={styles.sectionTitle}>CURRENCY</h3>
              <div className={styles.currency}>
                {/* US Flag */}
                <span className={styles.flag}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 7410 3900"
                  >
                    <rect width="7410" height="3900" fill="#b22234" />
                    <path
                      d="M0,450H7410M0,1050H7410M0,1650H7410M0,2250H7410M0,2850H7410M0,3450H7410"
                      stroke="#fff"
                      strokeWidth="300"
                    />
                    <rect width="2964" height="2100" fill="#3c3b6e" />
                    <circle cx="500" cy="400" r="100" fill="#fff" />
                    <circle cx="1000" cy="400" r="100" fill="#fff" />
                    <circle cx="1500" cy="400" r="100" fill="#fff" />
                    <circle cx="2000" cy="400" r="100" fill="#fff" />
                    <circle cx="2500" cy="400" r="100" fill="#fff" />
                    <circle cx="750" cy="800" r="100" fill="#fff" />
                    <circle cx="1250" cy="800" r="100" fill="#fff" />
                    <circle cx="1750" cy="800" r="100" fill="#fff" />
                    <circle cx="2250" cy="800" r="100" fill="#fff" />
                  </svg>
                </span>
                <span className={styles.dot}>✦</span>
                <span className={styles.currencyCode}>USD</span>
              </div>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* ── BOTTOM SECTION ── */}
        <div className={styles.bottomSection}>
          {/* mettā muse links */}
          <div className={styles.linksColumn}>
            <h2 className={styles.brandHeading}>mettā muse</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Stories</a>
              </li>
              <li>
                <a href="#">Artisans</a>
              </li>
              <li>
                <a href="#">Boutiques</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">EU Compliances Docs</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.linksColumn}>
            <h3 className={styles.sectionTitle}>QUICK LINKS</h3>
            <ul>
              <li>
                <a href="#">Orders & Shipping</a>
              </li>
              <li>
                <a href="#">Join/Login as a Seller</a>
              </li>
              <li>
                <a href="#">Payment & Pricing</a>
              </li>
              <li>
                <a href="#">Return & Refunds</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Follow + Accepts */}
          <div className={styles.followSection}>
            {/* Social */}
            <div>
              <h3 className={styles.sectionTitle}>FOLLOW US</h3>
              <div className={styles.socialIcons}>
                {/* Instagram */}
                <div className={styles.iconCircle}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                {/* LinkedIn */}
                <div className={styles.iconCircle}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className={styles.accepts}>
              {/* Mixed-case label matching the image */}
              <p className={styles.acceptsLabel}>mettā muse ACCEPTS</p>
              <div className={styles.paymentIcons}>
                {/* Google Pay */}
                <div className={styles.paymentCard}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1280px-Google_Pay_Logo.svg.png"
                    alt="Google Pay"
                    width={45}
                    height={28}
                  />
                </div>

                {/* Mastercard */}
                <div className={styles.paymentCard}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                    alt="Mastercard"
                    width={45}
                    height={28}
                  />
                </div>

                {/* PayPal */}
                <div className={styles.paymentCard}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
                    alt="PayPal"
                    width={50}
                    height={30}
                  />
                </div>

                {/* Amex */}
                <div className={styles.paymentCard}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/1200px-American_Express_logo.svg.png"
                    alt="Amex"
                    width={45}
                    height={28}
                  />
                </div>

                {/* Apple Pay */}
                <div className={styles.paymentCard}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1280px-Apple_Pay_logo.svg.png"
                    alt="Apple Pay"
                    width={45}
                    height={28}
                  />
                </div>

                {/* Shop Pay */}
                <div className={`${styles.paymentCard} ${styles.shopPayCard}`}>
                  <Image
                    src="https://1000logos.net/wp-content/uploads/2024/07/Shop-Pay-Emblem.png"
                    alt="Shop Pay"
                    width={50}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
