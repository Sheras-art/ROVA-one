import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

import styles from "./faq.module.css";

const faqs = [
  {
    id: 1,
    question: "Is ROVA ONE compatible with my phone?",
    answer:
      "ROVA ONE connects seamlessly with compatible iOS and Android devices through the ROVA app.",
  },
  {
    id: 2,
    question: "How does health tracking work?",
    answer:
      "ROVA ONE continuously monitors supported health and activity metrics throughout your day.",
  },
  {
    id: 3,
    question: "How long does the battery last?",
    answer:
      "ROVA ONE is designed to provide several days of everyday use on a single charge.",
  },
  {
    id: 4,
    question: "Is ROVA ONE water resistant?",
    answer:
      "ROVA ONE is designed to handle everyday exposure to water and active lifestyles.",
  },
  {
    id: 5,
    question: "Can I wear ROVA ONE while sleeping?",
    answer:
      "Yes. Its lightweight design makes it comfortable to wear overnight and track sleep patterns.",
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

const listVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const answerVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },

  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.35,
        ease: "easeOut",
      },
      opacity: {
        duration: 0.2,
        delay: 0.08,
      },
    },
  },

  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.3,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.15,
      },
    },
  },
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={`container ${styles.container}`}>
        {/* Header */}
        <motion.header
          className={styles.header}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.eyebrow}>FAQ</span>

          <h2 className={styles.title}>
            Everything you
            <span>need to know.</span>
          </h2>

          <p className={styles.description}>
            Find answers to the most common questions about ROVA ONE.
          </p>
        </motion.header>

        {/* FAQ List */}
        <motion.div
          className={styles.list}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map(({ id, question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={id}
                className={`${styles.item} ${
                  isOpen ? styles.open : ""
                }`}
                variants={itemVariants}
              >
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${id}`}
                >
                  <span>{question}</span>

                  <motion.span
                    className={styles.icon}
                    animate={{
                      rotate: isOpen ? 90 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  >
                    <ChevronRight size={20} strokeWidth={1.8} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${id}`}
                      className={styles.answerWrapper}
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <p className={styles.answer}>{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;