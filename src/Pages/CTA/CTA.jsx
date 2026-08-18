/* ========================================
   ROVA ONE — CTA
======================================== */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import styles from "./cta.module.css";

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function CTA() {
  return (
    <section className={styles.cta}>
      {/* Background wordmark */}
      <div className={styles.wordmark} aria-hidden="true">
        ROVA ONE
      </div>

      {/* Ambient glow */}
      <div className={styles.glow} aria-hidden="true" />

      <motion.div
        className={`container ${styles.container}`}
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.span
          className={styles.eyebrow}
          variants={itemVariants}
        >
          Move with ROVA
        </motion.span>

        <motion.h2
          className={styles.title}
          variants={itemVariants}
        >
          Your world.
          <span>Your data.</span>
          <strong>One watch.</strong>
        </motion.h2>

        <motion.p
          className={styles.description}
          variants={itemVariants}
        >
          Stay connected to your health, your movement, and the moments
          that matter most.
        </motion.p>

        <motion.a
          href="#"
          className={styles.action}
          variants={itemVariants}
        >
          <span>Experience ROVA ONE</span>

          <span className={styles.actionIcon}>
            <ArrowUpRight size={18} strokeWidth={2} />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default CTA;