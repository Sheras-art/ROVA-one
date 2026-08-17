// Features.jsx

import { motion } from "motion/react";
import {
  LocateFixed,
  Activity,
  BatteryCharging,
  Sun,
} from "lucide-react";

import featureStyles from "./Features.module.css";

const features = [
  {
    icon: LocateFixed,
    title: "Precision GPS",
    description: "Track every route with unmatched accuracy.",
  },
  {
    icon: Activity,
    title: "Advanced Sensors",
    description: "Next-generation sensors for real-time performance data.",
  },
  {
    icon: BatteryCharging,
    title: "Long Battery Life",
    description: "Up to 14 days on a single charge.",
  },
  {
    icon: Sun,
    title: "Always-On Display",
    description: "See what matters anytime, in any light.",
  },
];

const introVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
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

const featureVariants = {
  hidden: {
    opacity: 0,
    y: 52,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function Features() {
  return (
    <section id="features" className={featureStyles.features}>
      <div className={`container ${featureStyles.container}`}>
        {/* Section Introduction */}
        <motion.div
          className={featureStyles.intro}
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.span className={featureStyles.eyebrow} variants={itemVariants}>
            Built for every move
          </motion.span>

          <motion.h2 className={featureStyles.title} variants={itemVariants}>
            Powerful features.
            <span>Real results.</span>
          </motion.h2>

          <motion.p className={featureStyles.description} variants={itemVariants}>
            ROVA ONE combines cutting-edge sensors with intelligent software
            to help you train, recover, and perform at your best.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className={featureStyles.featureGrid}
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              className={featureStyles.feature}
              variants={featureVariants}
            >
              <div className={featureStyles.icon}>
                <Icon size={22} strokeWidth={1.6} />
              </div>

              <h3 className={featureStyles.featureTitle}>{title}</h3>

              <p className={featureStyles.featureDescription}>{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;