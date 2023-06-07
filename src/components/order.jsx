import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Order() {
    // Customer details from previous page
    // Order details from previous page
    const [customerDetails, setCostumerDetails] = useState(null);
    const [orderData, setOrderData] = useState([]);

    // Get the details(order & customer) using localStorage & useEffect hook.
    useEffect(() => {
        const storedCustomerDetails = JSON.parse(localStorage.getItem("customerDetails"));
        setCostumerDetails(storedCustomerDetails);

        const storedOrderData = JSON.parse(localStorage.getItem("orderData"));
        setOrderData(storedOrderData);
    }, [])

    const logo = require("../images/logo-black.png");


    // Problemet med nedan är att varje gång sidan uppdateras blir det nya siffror
    // Kanske spara som en ny variabel och displaya bara den variabeln?
    // Blir samma "bug" men att det blir med +1 såklart :D
    // Ingen lovande idé men får duga.
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
      },
      foodPic: {
        width: 100,
        height: 100,
        margin: 10,
        padding: 5,
      },
      center: {
        display: "flex",
        justifyContent: "center"
      },
      block: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridAutoRows: "1fr",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        gap: 15,
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 10,
      },
      title: {
        borderBottom: "1px solid red"
      },
      orderBlock: {
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gridAutoRows: "1fr",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        gap: 15,
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 10,
      },
      customerName: {
        borderBottom: "1px solid red",
        paddingBottom: 5,
        marginBottom: 5,
      },
      homeBtn: {
        width: 120,
        height: 60,
        borderRadius: 5,
      },
    };




    return (
      <div style={styles.main}>
        <div style={styles.container}>
          <img src={logo} alt="" style={styles.homeLogo} />
        </div>
        <div style={styles.footer}>
          <div style={styles.container}>
            <h1 style={styles.title}>
              <div>{generateRandomTime()} minutes to delivery.</div>
            </h1>
          </div>
          <div>
            <div>
              <div>
              <div style={styles.center}>
                <h1 style={styles.title}>Delivery Details</h1>
              </div>
              <div style={styles.container}>
                {customerDetails && (
                  <div style={styles.orderBlock}>
                    <div><p style={styles.customerName}>{customerDetails.customerName}</p>{customerDetails.streetAddress} {customerDetails.streetNumber} {customerDetails.zipCode} {customerDetails.city}</div>
                  </div>
                )}
              </div>
              </div>
              <div>
                <div style={styles.center}>
                  <h1 style={styles.title}>Order Details</h1>
                </div>
                <div style={styles.container}>
                  {orderData && (
                  <div>
                    {orderData.map((item) => (
                    <div key={item.id} style={styles.block}>
                      <p>{item.name}</p>
                      <p>Amount: {item.amount} pieces</p>
                      <img style={styles.foodPic} src={item.image} alt="test" />
                    </div>
                    ))}
                  </div>)}
                </div>
                <div style={styles.center}>
                <Link to="/"><button style={styles.homeBtn}>Back To Home</button></Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Order;