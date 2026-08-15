import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import styles from "./navbar.module.css";
import useResponsiveNavLinks from "../../Hooks/responsiveNavLinks";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const {navLinks, sideBarLinks, windowWidth} = useResponsiveNavLinks();  

  const handleNavigation = (href) => {
    console.log(href);
    
    setIsMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBuyNow = () => {
    setIsMenuOpen(false);
    navigate("/order");
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Brand */}
        <a
          href="/"
          className={styles.brand}
          aria-label="ROVA ONE home"
        >
          <span className={styles.brandName}>ROVA</span>
          <span className={styles.brandModel}>ONE</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className={styles.desktopNav}
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={() => handleNavigation(href)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <button
          type="button"
          className={styles.desktopCta}
          onClick={handleBuyNow}
        >
          <span>Buy Now</span>
          <ArrowUpRight size={16} strokeWidth={2} />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={1.8} />
          ) : (
            <Menu size={24} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {sideBarLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  type="button"
                  className={styles.mobileNavLink}
                  onClick={() => handleNavigation(href)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={styles.mobileCta}
            onClick={handleBuyNow}
          >
            <span>Buy Now</span>
            <ArrowUpRight size={18} strokeWidth={2} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;