import { HeartPulse, Droplets, Moon } from "lucide-react";
import { motion } from "motion/react";

import healthStyle from "./Health.module.css";

const healthMetrics = [
  {
    id: 1,
    icon: HeartPulse,
    label: "Heart Rate",
    value: "72",
    unit: "BPM",
    description: "Real-time heart rate monitoring throughout your day.",
  },
  {
    id: 2,
    icon: Droplets,
    label: "Blood Oxygen",
    value: "98",
    unit: "%",
    description: "Track blood oxygen levels and understand your body better.",
  },
  {
    id: 3,
    icon: Moon,
    label: "Sleep",
    value: "8h 12m",
    unit: "",
    description: "Understand your sleep patterns and recovery every night.",
  },
];

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const dashboardVariants = {
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
    },
  },
};

const metricsContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const metricVariants = {
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

const graphVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },

  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 3,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

function Health() {
  return (
    <section id="health" className={healthStyle.health}>
      <div className={`container ${healthStyle.container}`}>
        {/* Section Header */}
        <motion.header
          className={healthStyle.header}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className={healthStyle.eyebrow}>Health Intelligence</span>

          <h2 className={healthStyle.title}>
            Your health.
            <span>In focus.</span>
          </h2>

          <p className={healthStyle.description}>
            Understand your body with continuous health insights designed
            to help you make better decisions every day.
          </p>
        </motion.header>

        {/* Health Dashboard */}
        <motion.div
          className={healthStyle.dashboard}
          variants={dashboardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main Heart Rate Panel */}
          <div className={healthStyle.mainMetric}>
            <div className={healthStyle.metricHeader}>
              <div>
                <span className={healthStyle.metricLabel}>Heart Rate</span>
                <span className={healthStyle.metricStatus}>
                  Live monitoring
                </span>
              </div>

              <div className={healthStyle.metricIcon}>
                <HeartPulse size={20} strokeWidth={1.7} />
              </div>
            </div>

            <div className={healthStyle.heartRate}>
              <strong>72</strong>
              <span>BPM</span>
            </div>

            {/* Heart Rate Graph */}
            <div className={healthStyle.graph}>
              <svg
                viewBox="0 0 800 180"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M0 105
                     C40 105 55 98 85 102
                     C110 105 120 118 145 112
                     C165 107 170 65 190 68
                     C205 70 205 132 225 137
                     C242 140 245 92 265 91
                     C285 90 288 112 310 108
                     C340 102 355 102 380 105
                     C410 108 425 125 450 118
                     C470 112 475 70 495 74
                     C515 78 510 137 535 138
                     C555 138 560 98 580 96
                     C605 94 615 109 640 105
                     C675 100 690 101 720 104
                     C750 108 770 104 800 105"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={graphVariants}
                />
              </svg>
            </div>

            <div className={healthStyle.graphMeta}>
              <span>10:00</span>
              <span>12:00</span>
              <span>14:00</span>
              <span>16:00</span>
            </div>
          </div>

          {/* Supporting Metrics */}
          <motion.div
            className={healthStyle.metrics}
            variants={metricsContainerVariants}
          >
            {healthMetrics.slice(1).map(
              ({ id, icon: Icon, label, value, unit, description }) => (
                <motion.article
                  key={id}
                  className={healthStyle.metric}
                  variants={metricVariants}
                >
                  <div className={healthStyle.metricTop}>
                    <div className={healthStyle.metricIcon}>
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <span className={healthStyle.metricLabel}>{label}</span>
                  </div>

                  <div className={healthStyle.metricValue}>
                    <strong>{value}</strong>
                    {unit && <span>{unit}</span>}
                  </div>

                  <p>{description}</p>
                </motion.article>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Health;