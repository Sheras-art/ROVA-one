import { Navigation, HeartPulse, BatteryCharging } from "lucide-react";

import { motion } from "motion/react";

import styles from "./Technology.module.css";
import watchImage from "../../assets/images/rova-one-technology-watch.png";

const technologies = [
  {
    id: 1,
    icon: Navigation,
    label: "Precision GPS",
    title: "Dual-frequency positioning",
    description:
      "Track every route with improved accuracy, even through challenging environments.",
    position: "gps",
  },
  {
    id: 2,
    icon: HeartPulse,
    label: "Advanced Sensors",
    title: "Real-time biometrics",
    description:
      "Continuously monitor heart rate and performance data with next-generation sensors.",
    position: "sensor",
  },
  {
    id: 3,
    icon: BatteryCharging,
    label: "Power System",
    title: "Intelligent energy management",
    description:
      "Optimized power consumption keeps ROVA ONE performing throughout your day.",
    position: "power",
  },
];

const introVarients = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const watchVarients = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.904,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
};

const headingsVarients = {
  hidden: {
    y: 40,
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

const callOutVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "ease",
    },
  },
};

function Technology() {
  return (
    <section id="technology" className={styles.technology}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className={`container ${styles.container}`}
      >
        {/* Section Header */}
        <motion.div variants={headingsVarients} className={styles.header}>
          <motion.span  className={styles.eyebrow}>
            Engineered for performance
          </motion.span>

          <motion.h2  className={styles.title}>
            Advanced technology.
            <motion.span >Inside and out.</motion.span>
          </motion.h2>

          <motion.p  className={styles.description}>
            Precision hardware and intelligent software work together to deliver
            accurate data, reliable performance, and a smarter training
            experience.
          </motion.p>
        </motion.div>

        {/* Product Visual */}
        <motion.div className={styles.product}>
          <div className={styles.productGlow} />

          <motion.img
            variants={watchVarients}
            src={watchImage}
            alt="ROVA ONE smartwatch"
            className={styles.watch}
          />

          {/* Technology Callouts */}
          <motion.div className={styles.callouts}>
            {technologies.map(
              ({ id, icon: Icon, label, title, description, position }) => (
                <motion.article
                  variants={callOutVarients}
                  key={id}
                  className={`${styles.callout} ${styles[position]}`}
                >
                  <div className={styles.calloutIcon}>
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <div className={styles.calloutContent}>
                    <span className={styles.calloutLabel}>{label}</span>

                    <h3 className={styles.calloutTitle}>{title}</h3>

                    <p className={styles.calloutDescription}>{description}</p>
                  </div>

                  {/* <span className={styles.connector} /> */}
                </motion.article>
              ),
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Technology;
