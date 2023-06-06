import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';

function Payment() {
    // input forms for payment (KWISH, WISA, MASTERKARD) / Kanske 2 komponenter?
    // Validate inputs for Payment details < Done Delivery but not Payment
    // styla sidan

    const [orderData, setOrderData] = useState([]);
    let getOrder = JSON.parse(localStorage.getItem("orderData"));

    useEffect(() => {
        setOrderData([...getOrder]);
    }, [])

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for(let i = 0; i < orderData.length; i++) {
            const item = orderData[i];
            totalPrice += item.price * item.amount;
        }
        return totalPrice.toFixed(2);
    }

    const logo = require("../images/logo-black.png")


    const styles = {
        main: {
            backgroundColor: "#ffcab5",
            width: "100%",
            height: "100%",
        },
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
            marginBottom: 10,
        },
        sbContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            margin: 10,
        },
        homelogo: {
            width: 300,
            height: 300,
        },
        payBtn: {
            width: 150,
            height: 60,
            borderRadius: 5,
        }
    }

    return ( 
    
    <div style={styles.main}>
        <div style={styles.container}>
            <div>
                <img src={logo} style={styles.homelogo}/>
            </div>
        </div>
        <div style={styles.sbContainer}>
            <div style={styles.container}>
                <DeliveryForm />
            </div>
            <div style={styles.container}>
                <PaymentForm />
            </div>
        </div>
        <div style={styles.container}>
            {orderData.length > 0 && 
            <div>
            {orderData.map(item => {
                return (
                    <div key={`${item.id} - ${item.name}`}>
                    Name: {item.name} <br/>
                    Amount: {item.amount}
                </div>
                );
            })}
            <div>
                Total Price: ${calculateTotalPrice()}
            </div>
            </div>}
        </div>
        <div style={styles.container}>
            <Link to="/order">
                <button style={styles.payBtn}>Pay</button>
            </Link>
        </div>
    </div>
    );
}

export default Payment;