import { ArrowUpRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* Hero Visual */}
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.visualOverlay} />
      </div>

      {/* Hero Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.titleAccent}>TRAIN SMARTER.</span>
            <span>PUSH FURTHER.</span>
          </h1>

          <p className={styles.description}>
            ROVA ONE is the advanced fitness watch built to elevate your
            performance, every single day.
          </p>

          {/* Actions */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              onClick={handleBuyNow}
            >
              <span>Buy Now</span>
              <ArrowUpRight size={18} strokeWidth={2} />
            </button>

            <button
              type="button"
              className={styles.secondaryAction}
              onClick={handleWatchVideo}
            >
              <span className={styles.playIcon}>
                <Play size={13} strokeWidth={2} fill="currentColor" />
              </span>

              <span>Watch Video</span>
            </button>
          </div>

          {/* Product Highlights */}
          <div className={styles.highlights} aria-label="Product highlights">
            {productHighlights.map(({ value, label }) => (
              <div className={styles.highlight} key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;