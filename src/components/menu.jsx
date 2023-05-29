import React, {useEffect, useState} from 'react';

function Menu() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7000/").then((res) => res.json()).then((data) => {
            setData(data);
        })
    })

    function logData(dataExample) {
        console.log(`${data}`);
    }

    return ( 
    <div>
        <h1>Press to log data</h1>
        <button onClick={logData}>Log Data</button>    
    </div> );


}

export default Menu;