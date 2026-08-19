import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import styles from "./orderSuccess.module.css";


function OrderSuccess() {
  return (
    <main className={styles.success}>
        
      <div className={`container ${styles.container}`}>

        {/* ======== Order page link ========= */}

        <Link
            to="/order"
            className={styles.secondaryAction}
          >
            <ArrowLeft size={16} />

            <span>View Order Page</span>
          </Link>

        {/* ==================================
            BRAND
        ================================== */}

        <span className={styles.brand}>
          ROVA ONE
        </span>


        {/* ==================================
            SUCCESS ICON
        ================================== */}

        <div className={styles.icon}>
          <Check size={32} strokeWidth={1.8} />
        </div>


        {/* ==================================
            MESSAGE
        ================================== */}

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Order received
          </span>

          <h1>
            Thank you for
            <span>exploring ROVA ONE.</span>
          </h1>

          <p>
            This is a portfolio project created to
            demonstrate a complete product experience.
          </p>

          <p className={styles.notice}>
            No real order or payment has been processed.
          </p>
        </div>


        {/* ==================================
            ACTIONS
        ================================== */}

        <div className={styles.actions}>
          <Link
            to="/ "
            className={styles.primaryAction}
          >
            <span>Back to ROVA ONE</span>

            <span className={styles.actionIcon}>
              <ArrowRight size={17} />
            </span>
          </Link>
        </div>

      </div>
    </main>
  );
}

export default OrderSuccess;