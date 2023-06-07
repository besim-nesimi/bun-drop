import React, { useEffect, useState } from "react";
import GetMenu from "../utils/fetch-json";
import { Link } from "react-router-dom";

function Menu() {
  // insert data and routes here, fetch menu (db) with pics and stuff

  // UPDATE 2023-05-31
  // För att se bilderna som  tillhör var och ett item,
  // behöver vi serialisera det till json,
  // och deserialisera tillbaka när vi ska använda det!

  const [menuData, setMenuData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const logo = require("../images/logo-black.png");

  const styles = {
    main: {
      backgroundColor: "#78aafa",
      width: "100%",
      height: "100%",
    },
    homelogo: {
      width: 300,
      height: 300,
    },
    foodPics: {
      width: 100,
      height: 100,
      margin: 10,
      padding: 5,
      boxShadow: "1px 1px 1px gray",
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
    bottomHalf: {
      backgroundColor: "#ffcab5",
    },
    payBtn: {
      width: 120,
      height: 60,
      borderRadius: 5,
    },
  };

  useEffect(() => {
    GetMenu().then((data) => {
      setMenuData(data);
    });
  }, []);

  const selectItem = (item) => {
    const foundItem = selectedItems.findIndex((r) => r.id === item.id);

    if (foundItem === -1) {
      item.amount += 1;
      setSelectedItems((oldArray) => [...oldArray, item]);
    } else {
      const tempArray = [...selectedItems];
      tempArray[foundItem].amount += 1;
      setSelectedItems(tempArray);
    }
  };

  const removeItem = (item) => {
    const foundItem = selectedItems.findIndex((r) => r.id === item.id);

    if (foundItem !== -1) {
      const tempArray = [...selectedItems];
      const itemAmount = tempArray[foundItem].amount;

      if (itemAmount > 1) {
        tempArray[foundItem].amount -= 1;
        setSelectedItems(tempArray);
      } else {
        const filteredArray = tempArray.filter((b) => b.id !== item.id);
        setSelectedItems(filteredArray);
      }
    }
  };

  function handlePayment() {
    localStorage.setItem("orderData", JSON.stringify(selectedItems));
  }

  return (
    <div className="main" style={styles.main}>
      <div style={styles.container}>
        <div>
          <img src={logo} style={styles.homelogo} />
        </div>
      </div>
      <div style={styles.container}>
        <h1>Bun Drop Menu</h1>
      </div>
      <div style={styles.bottomHalf}>
        <div style={styles.container}>
          <div>
            <div style={styles.menuSection}>
              {menuData.map((item) => {
                // const imageSrc = imageMap[item.image];
                return (
                  <div key={item.id}>
                    <div style={styles.menuCards}>
                      <div style={styles.container}>
                        <img
                          src={item.image}
                          alt="test"
                          style={styles.foodPics}
                        />
                      </div>
                      Name: {item.name} <br />
                      Price: ${item.price} <br />
                      Description: {item.description} <br />
                      <div style={styles.container}>
                        <button onClick={() => selectItem(item)}>+</button>
                        <button onClick={() => removeItem(item)}>-</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div style={styles.container}>
          <div style={styles.menuCards}>
            {selectedItems.map((item) => {
              return (
                <div key={item.id}>
                  <div>{item.name}</div>
                  <div>Amount: {item.amount}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={styles.container}>
          <Link to="/payment">
            <button
              style={styles.payBtn}
              onClick={handlePayment}
              disabled={selectedItems.length < 1}
            >
              Go to Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
