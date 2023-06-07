import React, { useEffect, useState } from 'react';

function Order() {
    // fetch that specific order which user paid for, display here,

    // Customer details from previous page
    const [customerDetails, setCostumerDetails] = useState(null);

    useEffect(() => {
        const storedCustomerDetails = JSON.parse(localStorage.getItem("customerDetails"));
        setCostumerDetails(storedCustomerDetails);
    }, [])

    const logo = require("../images/logo-black.png");


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

    const styles = {
      main: {
        backgroundColor: "#78aafa",
        width: "100%",
        height: "100%",
      },
      homeLogo: {
        width: 300,
        height: 300,
      },
      footer: {
        backgroundColor: "#ffcab5",
      },
      container: {
        display: "flex",
        justifyContent: "center",
        padding: 5,
        margin: 5,
      },
      card: {
        display: "flex",
        justifyContent: "space-between",
        padding: 5,
        marginLeft: 10,
      }
    };

    // Some random "thank you for bun-dropping a meal or whatever"
    // STYLE



    return (
      <div style={styles.main}>
        <div style={styles.container}>
          <img src={logo} alt="" style={styles.homeLogo} />
        </div>
        <div style={styles.footer}>
          <div style={styles.container}>
            <h1>
              <div>{generateRandomTime()} minutes to delivery.</div>
            </h1>
          </div>
          <div style={styles.container}>
            <div>
              <h1>Delivery Details</h1>
              <div>
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
              </div>
              <div>
                <h1>Order Details</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Order;