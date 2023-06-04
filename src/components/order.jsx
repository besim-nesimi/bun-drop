import React from 'react';

function Order() {
    // fetch that specific order which user added to his basket, display here,
    // use localstorage from menu to this
    // form with validation for payment and delivery details
    const randomTime = (new Date() - Math.random(1)*(1,4))
    

    // randomTime funkar som orderNumber också?
    // alltså att du använder samma metod som ovan för att
    // generera ett random nummber.
    return (


    <div>
        <h1>Confirmation site</h1>
        <h1>Delivery Details</h1>
        <h1>Random numbers to show order nr</h1>
        <h1><div>{randomTime} hours to delivery. Yes, you're gonna have to wait a loooooong time.</div></h1>
    </div>
    );
}

export default Order;