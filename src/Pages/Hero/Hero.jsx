import { ArrowUpRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { motion, scale } from "motion/react";

import styles from "./Hero.module.css";

const productHighlights = [
  {
    value: "14 DAYS",
    label: "Battery Life",
  },
  {
    value: "5 ATM",
    label: "Water Resistant",
  },
  {
    value: "100+",
    label: "Sports Modes",
  },
];

function Hero() {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/order");
  };

  const handleWatchVideo = () => {
    // Video functionality will be implemented later.
  };

  const introVarients = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.15,
      },
    },
  };

  const contentVarients = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      {/* Hero Visual */}
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.visualOverlay} />
      </div>

      {/* Hero Content */}
      <motion.div variants={introVarients} className={styles.container}>
        <motion.div className={styles.content}>
          <motion.h1
            variants={contentVarients}
            id="hero-title"
            className={styles.title}
          >
            <span className={styles.titleAccent}>TRAIN SMARTER.</span>
            <span>PUSH FURTHER.</span>
          </motion.h1>

          <motion.p variants={contentVarients} className={styles.description}>
            ROVA ONE is the advanced fitness watch built to elevate your
            performance, every single day.
          </motion.p>

          {/* Actions */}
          <div className={styles.actions}>
            <motion.button
              variants={contentVarients}
              type="button"
              className={styles.primaryAction}
              onClick={handleBuyNow}
            >
              <span>Buy Now</span>
              <ArrowUpRight size={18} strokeWidth={2} />
            </motion.button>

            <motion.button
              variants={contentVarients}
              type="button"
              className={styles.secondaryAction}
              onClick={handleWatchVideo}
            >
              <span className={styles.playIcon}>
                <Play size={13} strokeWidth={2} fill="currentColor" />
              </span>

              <span>Watch Video</span>
            </motion.button>
          </div>

          {/* Product Highlights */}
          <motion.div
            variants={contentVarients}
            className={styles.highlights}
            aria-label="Product highlights"
          >
            {productHighlights.map(({ value, label }) => (
              <div className={styles.highlight} key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
