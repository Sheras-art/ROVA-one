import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { motion } from "motion/react";

import styles from "./navbar.module.css";
import useResponsiveNavLinks from "../../Hooks/responsiveNavLinks";
import { object } from "motion/react-client";

function Navbar({activeSection}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { navLinks, sideBarLinks, windowWidth } = useResponsiveNavLinks();

  const handleNavigation = (href) => {    
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

  const navLinksIntroVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const navLinksVarients = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOUT",
      },
    },
  };

  const brandVarients = {
    hidden: {
      x: -40,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const CtaVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };  

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={styles.navbar}
    >
      <div className={styles.container}>
        {/* Brand */}
        <a
          href="/ROVA-one/"
          className={styles.brand}
          aria-label="ROVA ONE home"
        >
          <motion.span variants={brandVarients} className={styles.brandName}>
            ROVA
          </motion.span>
          <span className={styles.brandModel}>ONE</span>
        </a>

        {/* Desktop Navigation */}
        <motion.nav
          variants={navLinksIntroVariants}
          className={styles.desktopNav}
          aria-label="Main navigation"
        >
          <motion.ul className={styles.navList}>
            {navLinks.map(({ label, href }) => (
              <motion.li variants={navLinksVarients} key={href}>
                <motion.button
                  type="button"
                  className={`${styles.navLink} ${"#" + activeSection === href.toLocaleLowerCase() ? styles.active : ""}`}
                  onClick={() => handleNavigation(href)}
                >
                  {label}
                </motion.button>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>

        {/* Desktop CTA */}
        <motion.button
          variants={CtaVarients}
          type="button"
          className={styles.desktopCta}
          onClick={handleBuyNow}
        >
          <span>Buy Now</span>
          <ArrowUpRight size={16} strokeWidth={2} />
        </motion.button>

        {/* Mobile Menu Toggle */}
        <motion.button
          variants={CtaVarients}
          type="button"
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={1.8} />
          ) : (
            <Menu size={24} strokeWidth={1.8} />
          )}
        </motion.button>
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
    </motion.header>
  );
}

export default Navbar;
