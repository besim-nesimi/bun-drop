import React, { useState } from "react";

function PaymentForm({setPaymentFormSubmitted}) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [formApproved, setFormApporved] = useState({});

  // Set the payment method by using event, whatever is clicked on between two choices.
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  // The payment methods to choose from.
  const handleSubmit = (e) => {
    const updatedFormApproved = {};
    e.preventDefault();

    if (paymentMethod === "card") {
      if (validateCardForm()) {
        console.log("Card Payment:", cardNumber, cvv, cardHolderName);
        updatedFormApproved.paymentMethod = "Click 'Pay' to place your Bun-Drop order!"
        setPaymentFormSubmitted(true);
      }
    } else if (paymentMethod === "kwish") {
      if (validateSwishForm()) {
        console.log("Kwish Payment:", phoneNumber);
        updatedFormApproved.paymentMethod = "Click 'Pay' to Kwish your Bun-Drop order!"
        setPaymentFormSubmitted(true);
      }
    }
    setFormApporved(updatedFormApproved)
    setCardNumber("");
    setCVV("");
    setCardHolderName("");
    setPhoneNumber("");
  };

  // Validate card number, CVV and holder.
  // Card number can only be 16 numbers defined by the regEx
  // CVV can only be 3 numbers defined by the regEx
  // Card Holder Name is required, in text.
  const validateCardForm = () => {
    const errors = {};

    if (cardNumber.trim() === "") {
      errors.cardNumber = "Card number is required.";
    } else if (!/^\d{16}$/.test(cardNumber)) {
      errors.cardNumber = "Card no. must be 16 numbers.";
    }

    if (cvv.trim() === "") {
      errors.cvv = "CVV is required.";
    } else if (!/^\d{3}$/.test(cvv)) {
      errors.cvv = "CVV must be 3 digits.";
    }

    if (cardHolderName.trim() === "") {
      errors.cardHolderName = "Card holder name is required.";
    } else if (cardHolderName.trim().length > 24 || !/^[a-öA-Ö\s]+$/.test(cardHolderName.trim())) {
      errors.cardHolderName = "Maximum of 24 text characters.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // Constantly reset all fields if any of the fields are wrong.
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormErrors((prevErrors) => ({...prevErrors, [name]: ""}))

    if(name === "cardNumber") {
      setCardNumber(value);
    } else if (name === "cvv") {
      setCVV(value)
    } else if (name === "cardHolderName") {
      setCardHolderName(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    }
  }

  // Simple validation for PhoneNumber. I know I named the pay.method Kwish but... yeah.
  const validateSwishForm = () => {
    if (phoneNumber.trim() === "" || phoneNumber.length !== 10 ) {
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

  // Styles...
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
    approved: {
      display: "flex",
      justifyContent: "center"
    }
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
                    name="cardNumber"
                    placeholder="1111 2222 3333 4444"
                    // onChange={(e) => setCardNumber(e.target.value)}
                    onChange={handleInputChange}
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
                    name="cvv"
                    placeholder="123"
                    // onChange={(e) => setCVV(e.target.value)}
                    onChange={handleInputChange}
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
                    name="cardHolderName"
                    placeholder="John Atkins"
                    // onChange={(e) => setCardHolderName(e.target.value)}
                    onChange={handleInputChange}
                    style={styles.inputStyle}
                  />
                </label>
              </div>
            </div>
            <div style={styles.approved}>
              {formApproved.paymentMethod && <div>{formApproved.paymentMethod}</div>}
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
                    name="phoneNumber"
                    placeholder="0701234567"
                    // onChange={(e) => setPhoneNumber(e.target.value)}
                    onChange={handleInputChange}
                    style={styles.inputStyle}
                  />
                </label>
              </div>
            </div>
            <div>
              {formApproved.paymentMethod && <div>{formApproved.paymentMethod}</div>}
            </div>
            <div style={styles.error}>
              {formErrors.phoneNumber && <div>{formErrors.phoneNumber}</div>}
            </div>
            <div style={styles.center}>
              <button type="submit">Enter</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default PaymentForm;
