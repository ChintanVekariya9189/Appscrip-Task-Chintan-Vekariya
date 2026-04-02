import React from 'react';
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
                    style={{ borderRadius: '50%' }}
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
                  <svg
                    viewBox="0 0 80 32"
                    style={{ width: '50px', height: '18px', display: 'block' }}
                  >
                    <text
                      x="0"
                      y="24"
                      fontFamily="Arial, sans-serif"
                      fontSize="22"
                      fontWeight="500"
                    >
                      <tspan fill="#4285F4">G</tspan>
                      <tspan fill="#EA4335">o</tspan>
                      <tspan fill="#FBBC05">o</tspan>
                      <tspan fill="#4285F4">g</tspan>
                      <tspan fill="#34A853">l</tspan>
                      <tspan fill="#EA4335">e</tspan>
                    </text>
                    <text
                      x="53"
                      y="24"
                      fontFamily="Arial, sans-serif"
                      fontSize="22"
                      fontWeight="500"
                      fill="#5F6368"
                    >
                      Pay
                    </text>
                  </svg>
                </div>

                {/* Mastercard */}
                <div className={styles.paymentCard}>
                  <svg
                    viewBox="0 0 44 28"
                    style={{ width: '34px', height: '22px', display: 'block' }}
                  >
                    <circle cx="16" cy="14" r="14" fill="#EB001B" />
                    <circle cx="28" cy="14" r="14" fill="#F79E1B" />
                    <path
                      d="M22 4.9a14 14 0 0 1 0 18.2A14 14 0 0 1 22 4.9z"
                      fill="#FF5F00"
                    />
                  </svg>
                </div>

                {/* PayPal */}
                <div className={styles.paymentCard}>
                  <svg
                    viewBox="0 0 88 30"
                    style={{ width: '46px', height: '16px', display: 'block' }}
                  >
                    <text
                      x="2"
                      y="24"
                      fontFamily="Arial, sans-serif"
                      fontWeight="900"
                      fontStyle="italic"
                      fontSize="26"
                      fill="#003087"
                    >
                      Pay
                    </text>
                    <text
                      x="40"
                      y="24"
                      fontFamily="Arial, sans-serif"
                      fontWeight="900"
                      fontStyle="italic"
                      fontSize="26"
                      fill="#009cde"
                    >
                      Pal
                    </text>
                  </svg>
                </div>

                {/* Amex */}
                <div className={styles.paymentCard}>
                  <div className={styles.amexCard}>
                    <span className={styles.amexTop}>AMERICAN</span>
                    <span className={styles.amexBottom}>EXPRESS</span>
                  </div>
                </div>

                {/* Apple Pay */}
                <div className={styles.paymentCard}>
                  <div className={styles.applePayInner}>
                    <svg
                      viewBox="0 0 14 17"
                      style={{
                        width: '11px',
                        height: '13px',
                        display: 'block',
                        flexShrink: 0,
                      }}
                      fill="black"
                    >
                      <path d="M12.07 8.9c-.02-1.96 1.6-2.9 1.67-2.95-0.91-1.33-2.33-1.51-2.84-1.53-1.21-.12-2.37.71-2.98.71-.62 0-1.57-.7-2.58-.68C3.9 4.47 2.64 5.2 1.95 6.37.54 8.75 1.6 12.25 2.96 14.17c.67.96 1.47 2.04 2.51 2 1.01-.04 1.4-.65 2.62-.65 1.22 0 1.57.65 2.63.63 1.09-.02 1.78-.98 2.44-1.94.77-1.11 1.09-2.19 1.1-2.25-.02-.01-2.11-.81-2.19-3.06zm-2.04-5.62c.55-.67.93-1.6.82-2.53-.8.03-1.76.53-2.33 1.19-.51.59-.96 1.54-.84 2.45.89.07 1.8-.45 2.35-1.11z" />
                    </svg>
                    <span className={styles.applePayText}>Pay</span>
                  </div>
                </div>

                {/* Shop Pay — purple */}
                <div className={`${styles.paymentCard} ${styles.shopPayCard}`}>
                  <div className={styles.shopPayInner}>
                    <svg
                      viewBox="0 0 13 14"
                      style={{
                        width: '11px',
                        height: '12px',
                        display: 'block',
                        flexShrink: 0,
                      }}
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 3.5h9l-1 7H3L2 3.5z" />
                      <path d="M4.5 3.5S4 1.5 6.5 1.5 8.5 3.5 8.5 3.5" />
                    </svg>
                    <span>Pay</span>
                  </div>
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
