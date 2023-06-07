import React, { useState } from "react";

function PaymentForm({setPaymentFormSubmitted}) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === "card") {
      if (validateCardForm()) {
        console.log("Card Payment:", cardNumber, cvv, cardHolderName);
        setPaymentFormSubmitted(true);
      }
    } else if (paymentMethod === "kwish") {
      if (validateSwishForm()) {
        console.log("Kwish Payment:", phoneNumber);
        setPaymentFormSubmitted(true);
      }
    }

    setCardNumber("");
    setCVV("");
    setCardHolderName("");
    setPhoneNumber("");
  };

  const validateCardForm = () => {
    const errors = {};

    if (cardNumber.trim() === "") {
      errors.cardNumber = "Card number is required.";
    } else if (!/^\d{16}$/.test(cardNumber)) {
      errors.cardNumber = "Card number must be 16 digits.";
    }

    if (cvv.trim() === "") {
      errors.cvv = "CVV is required.";
    } else if (!/^\d{3}$/.test(cvv)) {
      errors.cvv = "CVV must be 3 digits.";
    }

    if (cardHolderName.trim() === "") {
      errors.cardHolderName = "Card holder name is required.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const validateSwishForm = () => {
    if (phoneNumber.trim() === "" || phoneNumber.length < 10) {
      const errors = {};

      if (phoneNumber.trim() === "") {
        errors.phoneNumber = "Phone number is required!";
      } else {
        errors.phoneNumber = "Phone number should be 10 digits.";
      }

      setFormErrors(errors);
      return false;
    }
    return true;
  };

  const styles = {
    inputStyle: {
      display: "flex",
      justifyContent: "center",
      width: "200px",
      margin: 10,
    },
    lblStyle: {
      width: "150px",
    },
    main: {
      background: "#ffcab5",
      borderRadius: 15,
      padding: 10,
      maxHeight: "400px",
    },
    card: {
      background: "#ffcab5",
      borderRadius: 15,
      padding: 10,
    },
    innerCard: {
      background: "white",
      borderRadius: 15,
      padding: 10,
      marginBottom: 10,
      display: "flex",
      justifyContent: "center",
    },
    spaceBtw: {
      display: "flex",
      justifyContent: "space-between",
    },
    paymentCard: {
      background: "white",
      borderRadius: 10,
      padding: 1,
      marginBottom: 10,
      marginLeft: 5,
      marginRight: 5,
      display: "flex",
      justifyContent: "center",
    },
    center: {
      display: "flex",
      justifyContent: "center",
    },
    error: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
      color: "red",
      borderRadius: 10,
      padding: 6,
    },
  };

  return (
    <div style={styles.main}>
      <div style={styles.innerCard}>
        <h2>Payment Method</h2>
      </div>
      <div style={styles.innerCard}>
        <div>
          <div style={styles.spaceBtw}>
            <label>
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={handlePaymentMethodChange}
              />
              Card
            </label>
            <div>
              <label>
                <input
                  type="radio"
                  value="kwish"
                  checked={paymentMethod === "kwish"}
                  onChange={handlePaymentMethodChange}
                />
                Kwish
              </label>
            </div>
          </div>
        </div>
      </div>

      {paymentMethod === "card" && (
        <div>
          <div style={styles.paymentCard}>
            <h2>Card Payment</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={styles.spaceBtw}>
              <div style={styles.paymentCard}>
                <label>
                  <div style={styles.center}>Card Number:</div>
                  <input
                    type="text"
                    value={cardNumber}
                    placeholder="1111 2222 3333 4444"
                    onChange={(e) => setCardNumber(e.target.value)}
                    style={styles.inputStyle}
                  />
                </label>
              </div>
              <div style={styles.paymentCard}>
                <label>
                  <div style={styles.center}>CVV:</div>
                  <input
                    type="text"
                    value={cvv}
                    placeholder="123"
                    onChange={(e) => setCVV(e.target.value)}
                    style={styles.inputStyle}
                  />
                </label>
              </div>
              <div style={styles.paymentCard}>
                <label>
                  <div style={styles.center}>Card Holder Name:</div>
                  <input
                    type="text"
                    value={cardHolderName}
                    placeholder="John Atkins"
                    onChange={(e) => setCardHolderName(e.target.value)}
                    style={styles.inputStyle}
                  />
                </label>
              </div>
            </div>
            <div style={styles.error}>
              <div>
                {formErrors.cardNumber && <div>{formErrors.cardNumber}</div>}
              </div>
              <div>{formErrors.cvv && <div>{formErrors.cvv}</div>}</div>
              <div>
                {formErrors.cardHolderName && (
                  <div>{formErrors.cardHolderName}</div>
                )}
              </div>
            </div>
            <div style={styles.center}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}

      {paymentMethod === "kwish" && (
        <div>
          <div style={styles.paymentCard}>
            <h2>Kwish Payment</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={styles.spaceBtw}>
              <div style={styles.paymentCard}>
                <label>
                  <div style={styles.center}>Phone Number:</div>
                  <input
                    type="text"
                    value={phoneNumber}
                    placeholder="0701234567"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={styles.inputStyle}
                  />
                </label>
              </div>
            </div>
            <div style={styles.error}>
              {formErrors.phoneNumber && <div>{formErrors.phoneNumber}</div>}
            </div>
            <div style={styles.center}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default PaymentForm;
