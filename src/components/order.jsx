import React from 'react';

function Order() {
    // fetch that specific order which user paid for, display here,
    // use localstorage from /payment to this /order
    const randomNumber = (new Date() - Math.random(1)*(1,4))

    // Show Order No. Show Time for Delivery (ETA)
    // Some random "thank you for bun-dropping a meal or whatever"
    

    // randomTime funkar som orderNumber också?
    // alltså att du använder samma metod som ovan för att
    // generera ett random nummber.

    // Problemet med ovan är att varje gång sidan uppdateras blir det nya siffror
    // Kanske spara randomtime som en variabel och displaya bara den variabeln? t.ex.

    // Blir samma "bug" men att det blir med +1 såklart :D
    const randomTime = randomNumber + 1;

    return (


    <div>
        <h1>Confirmation site</h1>
        <h1>Delivery Details</h1>
        <h1>Random numbers to show order nr</h1>
        <h1><div>{randomNumber} hours to delivery. Yes, you're gonna have to wait a loooooong time.</div></h1>
    </div>
    );
}

export default Order;