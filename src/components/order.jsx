import React, { useEffect, useState } from 'react';

function Order() {
    // fetch that specific order which user paid for, display here,

    // Customer details from previous page
    const [customerDetails, setCostumerDetails] = useState(null);

    useEffect(() => {
        const storedCustomerDetails = JSON.parse(localStorage.getItem("customerDetails"));
        setCostumerDetails(storedCustomerDetails);
    }, [])

    // Problemet med nedan är att varje gång sidan uppdateras blir det nya siffror
    // Kanske spara time som en ny variabel och displaya bara den variabeln?
    // Blir samma "bug" men att det blir med +1 såklart :D
    // Ingen lovande idé
    function generateRandomTime() {
        const random = Math.random();

        const minutesRange = 10;

        const offset = Math.floor(random * minutesRange);

        const time = 25 + offset;

        return time;
    }

    // Some random "thank you for bun-dropping a meal or whatever"
    // STYLE



    return (
    <div>
        <h1>Confirmation site</h1>
            {customerDetails && (
            <div>
                <p>Customer Name: {customerDetails.customerName}</p>
                <p>Street Address: {customerDetails.streetAddress}</p>
                <p>Street Number: {customerDetails.streetNumber}</p>
                <p>City: {customerDetails.city}</p>
                <p>Zip Code: {customerDetails.zipCode}</p>
                <p>Phone Number: {customerDetails.phoneNumber}</p>
            </div>
            )}
        <h1>Detailed list of items bought below</h1>
        <h1><div>{generateRandomTime()} minutes to delivery.</div></h1>
    </div>
    );
}

export default Order;