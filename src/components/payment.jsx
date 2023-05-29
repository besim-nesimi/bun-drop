import React, { useEffect, useState } from 'react';

function Payment() {
    // input forms for delivery, city, 
    // streetname and housenumber, 
    // fake payment solutions (Kwish, WISA and MasterKard)
    // VALIDATE INPUTS

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

    return ( 
    
    <div>
        <h1>Payment Site</h1>
        {orderData.length > 0 && <div>
        {orderData.map(item => {
                return (
                    <div key={`${item.id} - ${item.name}`}>
                        Name: {item.name} <br/>
                        Amount: {item.amount}
                    </div>
                );
            })}
            <div>Total Price: ${calculateTotalPrice()}</div>
        </div>}
    </div>
    );
}

export default Payment;