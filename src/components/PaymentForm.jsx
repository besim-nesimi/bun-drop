import React, { useState } from 'react';

function PaymentForm() {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCVV] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [formErrors, setFormErrors] = useState({})

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(paymentMethod === "card") {
            if(validateCardForm()) {
                console.log("Card Payment:", cardNumber, cvv, cardHolderName)
            }
        }
        else if(paymentMethod === "kwish") {
            if(validateSwishForm()) {
                console.log("Kwish Payment:", phoneNumber)
            }
        }

        setCardNumber("");
        setCVV("");
        setCardHolderName("");
        setPhoneNumber("");
    }

    const validateCardForm = () => {

        const errors = {};

        if(cardNumber.trim() === "") {
            errors.cardNumber = "Card number is required.";

        } else if (!/^\d{16}$/.test(cardNumber)) {
            errors.cardNumber = "Card number must be 16 digits.";
        }


        if(cvv.trim() === "") {
            errors.cvv = "CVV is required.";
        } else if(!/^\d{3}$/.test(cvv)) {
            errors.cvv = "CVV must be 3 digits."
        }
        
        if(cardHolderName.trim() === "") {
            errors.cardHolderName = "Card holder name is required."
        }
        
        setFormErrors(errors);

        return Object.keys(errors).length === 0;
        
    }

    const validateSwishForm = () => {
        if(phoneNumber.trim() === "" || phoneNumber.length < 10) {
            
            const errors = {};

            if(phoneNumber.trim() === "") {
                errors.phoneNumber = "Phone number is required!";
            } else {
                errors.phoneNumber = "Phone number should be 10 digits.";
            }
            
            setFormErrors(errors)
            return false;
        }
        return true;
    }

    const styles = {
        inputStyle: {
            width: "200px"
        },
        lblStyle: {
            
        }
        
    }
    
    return ( 
    <div>
        <h2>Payment Method</h2>
        <div>
            <label><input 
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={handlePaymentMethodChange}
            />
            Card
            </label>
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

        {paymentMethod === "card" && (
            <div>
                <h2>Card Payment</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Card Number:
                            <input 
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            style={styles.inputStyle}
                            />
                        </label>
                        {formErrors.cardNumber && (
                            <div>{formErrors.cardNumber}</div>
                        )}
                    </div>
                    <div>
                        <label>
                            CVV: 
                            <input 
                            type="text" 
                            value={cvv}
                            onChange={(e) => setCVV(e.target.value)}
                            style={styles.inputStyle}
                            />
                        </label>
                        {formErrors.cvv && (
                            <div>{formErrors.cvv}</div>
                        )}
                    </div>
                    <div>
                        <label>
                            Card Holder Name:
                            <input 
                            type="text" 
                            value={cardHolderName}
                            onChange={(e) => setCardHolderName(e.target.value)}
                            />
                        </label>
                        {formErrors.cardHolderName && (
                            <div>{formErrors.cardHolderName}</div>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )}

        {paymentMethod === "kwish" && (
            <div>
                <h2>Kwish Payment</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Phone Number: 
                            <input 
                            type="text" 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </label>
                        {formErrors.phoneNumber && (
                            <div>{formErrors.phoneNumber}</div>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )}
    </div> );
}

export default PaymentForm;