/* ========================================
   ROVA ONE — FOOTER
======================================== */

import { ArrowUpRight, ArrowUp } from "lucide-react";

import styles from "./footer.module.css";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Technology", href: "#technology" },
    { label: "Health", href: "#health" },
    { label: "Reviews", href: "#reviews" },
  ],

  company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "X",
    href: "#",
  },
];

function Footer() {
  const handleBackToTop = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        {/* Main Footer */}
        <div className={styles.main}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              ROVA ONE
            </a>

            <p className={styles.tagline}>
              Precision technology
              <span> for everyday movement.</span>
            </p>
          </div>

          {/* Navigation */}
          <nav className={styles.navigation} aria-label="Footer navigation">
            <div className={styles.column}>
              <span className={styles.heading}>Product</span>

              <ul>
                {footerLinks.product.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <span className={styles.heading}>Company</span>

              <ul>
                {footerLinks.company.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 ROVA ONE. All rights reserved.
          </p>

          <div className={styles.bottomActions}>
            <nav className={styles.socials} aria-label="Social media">
              {socialLinks.map(({ label, href }) => (
                <a key={label} href={href}>
                  {label}
                  <ArrowUpRight size={13} strokeWidth={1.8} />
                </a>
              ))}
            </nav>

            <a
              href="#"
              className={styles.backToTop}
              onClick={handleBackToTop}
              aria-label="Back to top"
            >
              <ArrowUp size={15} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;