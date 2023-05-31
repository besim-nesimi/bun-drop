import React, {useEffect, useState} from 'react';
import GetMenu from '../utils/fetch-json';
import { Link } from 'react-router-dom';


function Menu() {

    // insert data and routes here, fetch menu (db) with pics and stuff
    const [menuData, setMenuData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const logo = require("../images/logo-black.png")

    const styles = {
        main: {
            backgroundColor: "#ffcab5",
            width: "100%",
            height: "100%",
        },
        homelogo: {
            width: 300,
            height: 300,
        },

        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
            marginBottom: 10,
        },

        menuSection: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridAutoRows: "1fr",
        gap: 15,
        },

        menuCards: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        },

    }

    useEffect(() => {
        GetMenu().then((data) => {setMenuData(data)});
    },[])

    const selectItem = item => {
        const foundItem = selectedItems.findIndex(r => r.id === item.id)

        if(foundItem === -1) 
        {
            item.amount += 1;
            setSelectedItems(oldArray => [...oldArray, item])
        }
        else 
        {
            const tempArray = [...selectedItems]
            tempArray[foundItem].amount +=1;
            setSelectedItems(tempArray);
        }
    }

    const removeItem = item => {
        const foundItem = selectedItems.findIndex(r => r.id === item.id)

        if(foundItem !== -1)
        {
            const tempArray = [...selectedItems]
            const itemAmount = tempArray[foundItem].amount
            
            if(itemAmount > 1) {
                tempArray[foundItem].amount -=1;
                setSelectedItems(tempArray);
            }
            else 
            {
                const filteredArray = tempArray.filter(b => b.id !== item.id)
                setSelectedItems(filteredArray);
            }
        }
    }



    function handlePayment() {
        localStorage.setItem("orderData", JSON.stringify(selectedItems));
    }

    return ( 
    <div style={styles.main}>
        <div className="logo" style={styles.container}>
            <div>
            <img src={logo} styles={styles.homelogo}/>
            </div>
        </div>
        <div style={styles.container}>
            <h1>Bun Drop Menu</h1>
        </div>
        <div style={styles.container}>
            <div style={styles.menuSection}>
            {menuData.map(item => {
                return (
                    <div key={item.id}>
                        <div style={styles.menuCards}>
                        Name: {item.name} <br/>
                        Price: {item.price} <br/>
                        Image: <img src={item.image} style={{maxWidth: "100px"}}/> <br/>
                        <button onClick={() => selectItem(item)}>+</button>
                        <button onClick={() => removeItem(item)}>-</button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        <div style={styles.container}>
            <div style={styles.menuCards}>
            {selectedItems.map(item => {
                return (
                    <div key={item.id}>
                        <div>
                            {item.name}
                        </div>
                        <div>
                        Amount: {item.amount}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        <div style={styles.container}>
            <Link to="/payment"><button onClick={handlePayment} disabled={selectedItems.length < 1}>Go to Payment</button></Link>
        </div>
    </div> );
}


export default Menu;