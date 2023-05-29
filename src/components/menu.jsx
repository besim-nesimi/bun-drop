import React, {useEffect, useState} from 'react';
import GetMenu from '../utils/fetch-json';
import { Link } from 'react-router-dom';


function Menu() {

    // insert data and routes here, fetch menu (db) with pics and stuff
    const [menuData, setMenuData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

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
    <div>
        <img />
        <h1>Bun Drop Menu</h1>
        <div>
            {menuData.map(item => {
                return (
                    <div key={item.id}>
                        Name: {item.name} <br/>
                        Price: {item.price}
                        <button onClick={() => selectItem(item)}>+</button>
                        <button onClick={() => removeItem(item)}>-</button>
                    </div>
                )
            })}
        </div>
        <div>
        {selectedItems.map(item => {
                return (
                    <div key={item.id}>
                        Name: {item.name} <br/>
                        Amount: {item.amount}
                    </div>
                )
            })}
        </div>
        <Link to="/payment"><button onClick={handlePayment} disabled={selectedItems.length < 1}>Payment</button></Link>
    </div> );
}


export default Menu;