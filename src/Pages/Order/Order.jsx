import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

import watchImg from "../../assets/Images/rova-one-technology-watch.png";

import styles from "./order.module.css";

/* ========================================
   PAYMENT OPTIONS
======================================== */

const paymentMethods = [
  {
    id: "card",
    label: "Card",
  },
  {
    id: "paypal",
    label: "PayPal",
  },
  {
    id: "bank",
    label: "Bank Transfer",
  },
];

/* ========================================
   INITIAL FORM
======================================== */

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",

  paymentMethod: "card",

  cardholderName: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",

  paypalEmail: "",

  bankName: "",
  accountHolder: "",
  transferReference: "",
};

/* ========================================
   INPUT COMPONENT
======================================== */

function Input({ label, name, value, onChange, type = "text", placeholder }) {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

/* ========================================
   PAYMENT FIELDS
======================================== */

function PaymentFields({ form, handleChange }) {
  switch (form.paymentMethod) {
    case "paypal":
      return (
        <div className={styles.paymentFields}>
          <Input
            label="PayPal Email"
            name="paypalEmail"
            type="email"
            value={form.paypalEmail}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
      );

    case "bank":
      return (
        <div className={styles.paymentFields}>
          <Input
            label="Bank Name"
            name="bankName"
            value={form.bankName}
            onChange={handleChange}
            placeholder="Enter bank name"
          />

          <Input
            label="Account Holder"
            name="accountHolder"
            value={form.accountHolder}
            onChange={handleChange}
            placeholder="Enter account holder name"
          />

          <Input
            label="Transfer Reference"
            name="transferReference"
            value={form.transferReference}
            onChange={handleChange}
            placeholder="Enter reference"
          />
        </div>
      );

    case "card":
    default:
      return (
        <div className={styles.paymentFields}>
          <Input
            label="Cardholder Name"
            name="cardholderName"
            value={form.cardholderName}
            onChange={handleChange}
            placeholder="Name on card"
          />

          <Input
            label="Card Number"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
          />

          <div className={styles.fieldRow}>
            <Input
              label="Expiry Date"
              name="expiryDate"
              value={form.expiryDate}
              onChange={handleChange}
              placeholder="MM / YY"
            />

            <Input
              label="CVV"
              name="cvv"
              type="password"
              value={form.cvv}
              onChange={handleChange}
              placeholder="•••"
            />
          </div>
        </div>
      );
  }
}

/* ========================================
   ORDER SUMMARY
======================================== */

function OrderSummary() {
  const productPrice = 299;
  const shipping = 15;
  const total = productPrice + shipping;

  return (
    <aside className={styles.summary}>
      <div className={styles.summaryHeader}>
        <span>YOUR ORDER</span>
      </div>

      <div className={styles.product}>
        <div className={styles.productVisual}>
          {/* <span>ROVA</span> */}
          <img src={watchImg} alt="Rova one image" />
        </div>

        <div className={styles.productInfo}>
          <h3>ROVA ONE</h3>

          <span>Digital Watch × 1</span>
        </div>
      </div>

      <div className={styles.summaryDetails}>
        <div>
          <span>Subtotal</span>
          <span>${productPrice}</span>
        </div>

        <div>
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>
      </div>

      <div className={styles.total}>
        <span>Total</span>
        <strong>${total}</strong>
      </div>

      {/* SUBMIT */}

      <button type="submit" className={styles.submit}>
        <span>Place Order</span>

        <span className={styles.submitIcon}>
          <ArrowRight size={18} />
        </span>
      </button>

      <p className={styles.clarificationLine}>
        For portfolio purposes only. No payment information is collected or
        processed.
      </p>
    </aside>
  );
}

/* ========================================
   ORDER PAGE
======================================== */

function Order() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Portfolio project:
      No real payment or order processing.
    */

    navigate("/order-success");
  };

  return (
    <main className={styles.order}>
      {/* Back link */}
      <div className={styles.backLink}>
        <Link to={"/ "}>
          <ArrowLeft size={24} />
        </Link>
      </div>

      <div className={`container ${styles.container}`}>
        {/* ==================================
            HEADER
        ================================== */}

        <header className={styles.header}>
          <span className={styles.eyebrow}>ROVA ONE</span>

          <h1>
            Complete your
            <span> order.</span>
          </h1>

          <p>Secure. Simple. Transparent.</p>
        </header>

        {/* ==================================
            ORDER CONTENT
        ================================== */}

        <div className={styles.layout}>
          {/* ==================================
              FORM
          ================================== */}

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* DELIVERY */}

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span>01</span>

                <div>
                  <h2>Delivery Details</h2>

                  <p>Tell us where your ROVA ONE should go.</p>
                </div>
              </div>

              <div className={styles.fields}>
                <Input
                  label="Full Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 0000000"
                />

                <Input
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Street address"
                />

                <div className={styles.fieldRow}>
                  <Input
                    label="City"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Your city"
                  />

                  <Input
                    label="Postal Code"
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleChange}
                    placeholder="00000"
                  />
                </div>
              </div>
            </section>

            {/* PAYMENT */}

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span>02</span>

                <div>
                  <h2>Payment Method</h2>

                  <p>Choose how you'd like to complete your order.</p>
                </div>
              </div>

              {/* PAYMENT SELECTOR */}

              <div
                className={styles.paymentMethods}
                role="radiogroup"
                aria-label="Payment method"
              >
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={
                      form.paymentMethod === method.id
                        ? styles.paymentOptionActive
                        : styles.paymentOption
                    }
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={form.paymentMethod === method.id}
                      onChange={handleChange}
                    />

                    <span className={styles.radio} />

                    <span>{method.label}</span>
                  </label>
                ))}
              </div>

              {/* DYNAMIC PAYMENT AREA */}

              <PaymentFields form={form} handleChange={handleChange} />
            </section>
          </form>

          {/* ==================================
              ORDER SUMMARY
          ================================== */}

          <OrderSummary />
        </div>
      </div>
    </main>
  );
}

export default Order;
