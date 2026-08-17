import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

import reviewsStyle from "./Reviews.module.css";

const reviews = [
  {
    id: 1,
    quote:
      "ROVA ONE has completely changed how I keep track of my health and daily activity.",
    name: "Alex Morgan",
    role: "Fitness Enthusiast",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The design is incredible, but what impressed me most is how naturally it fits into my everyday routine.",
    name: "James Carter",
    role: "ROVA ONE User",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Everything I need is right there when I need it. Simple, refined, and genuinely useful.",
    name: "Sophie Williams",
    role: "Daily User",
    rating: 5,
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

const reviewsContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.15,
    },
  },
};

const reviewVariants = {
  hidden: {
    opacity: 0,
    y: 24,
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

function Reviews() {
  return (
    <section id="reviews" className={reviewsStyle.reviews}>
      <div className={`container ${reviewsStyle.container}`}>
        {/* Section Header */}
        <motion.header
          className={reviewsStyle.header}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={reviewsStyle.eyebrow}>Customer Reviews</span>

          <h2 className={reviewsStyle.title}>
            Built for real life.
            <span>Loved by many.</span>
          </h2>

          <p className={reviewsStyle.description}>
            See why people choose ROVA ONE to stay connected to what matters
            most.
          </p>
        </motion.header>

        {/* Reviews */}
        <motion.div
          className={reviewsStyle.reviewGrid}
          variants={reviewsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviews.map(({ id, quote, name, role, rating }) => (
            <motion.article
              key={id}
              className={reviewsStyle.review}
              variants={reviewVariants}
            >
              <div className={reviewsStyle.quoteIcon}>
                <Quote size={22} strokeWidth={1.7} />
              </div>

              <div className={reviewsStyle.rating} aria-label={`${rating} out of 5 stars`}>
                {Array.from({ length: rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    strokeWidth={1.8}
                    fill="currentColor"
                  />
                ))}
              </div>

              <blockquote className={reviewsStyle.quote}>
                “{quote}”
              </blockquote>

              <footer className={reviewsStyle.author}>
                <div className={reviewsStyle.avatar} aria-hidden="true">
                  {name.charAt(0)}
                </div>

                <div>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Reviews;