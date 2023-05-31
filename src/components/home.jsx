import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../styles/home-style.css";

function Home() {

    const logo = require("../images/logo-black.png")
    const burger1 = require("../images/burger-1.png")
    const burger2 = require("../images/burger-2.png")
    const burger3 = require("../images/burger-3.png")
    const burger4 = require("../images/burger-4.png")
    const burger5 = require("../images/burger-5.png")
    const burger6 = require("../images/burger-6.png")
    const burger7 = require("../images/burger-7.png")
    const burger8 = require("../images/burger-8.png")
    const burger9 = require("../images/burger-9.png")
    const milkshake = require("../images/milkshake-1.png")
    const fries1 = require("../images/fries-1.png")
    const fries2 = require("../images/fries-2.png")
    const soda1 = require("../images/soda-1.png")
    const soda2 = require("../images/soda-2.png")
    const soda3 = require("../images/soda-3.png")
    const soda4 = require("../images/soda-4.png")

    const styles = {
        main: {
            backgroundColor: "#ffcab5",
            width: "100%",
            height: "100%",
        },
        footer: {
            backgroundColor: "#ffe0d9",
            width: "100%",
            height: "100%",
            marginTop: 10,
        },
        footerCard: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
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
            boxShadow: "1px 1px 1px gray"
        },
        menubtn: {
            width: 200,
            height: 60,
            border: "groove",
            textShadow: "#c7dfff 1px 0px 10px",
            margin: 5,
            borderColor: "#b3a7a2",
            borderRadius: 10,
            textalign: "center",
            display: "inline-block",
            fontSize: 16,
            fontWeight: "bold",
            color: "#ad9084",
            backgroundColor: "#fc7844",
        },
        container:  {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
            marginBottom: 10,
        },
        
        picSection: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "1fr",
            gap: 15,
        },

        picCards: {
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
        },
        title: {

        },
        info: {
            fontWeight: "bold",
        }
     }

    return (


        <div className="main" style={styles.main}>
            <div style={styles.container}>
                <div>
                <img src={logo} style={styles.homelogo}/>
                </div>
            </div>
                <div style={styles.container}>
                <h1>Welcome to Bun Drop!</h1>
                </div>
                <div style={styles.container}>
                    <p style={styles.info}>Take a look at our Menu!</p>
                </div>
            <div style={styles.container}>
            <Link to="/menu"><button style={styles.menubtn}>DROP THE MENU</button></Link>
            </div>
            <div style={styles.picSection}>
                <div style={styles.picCards}>
                    <img src={burger1} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={burger2} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={burger3} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                  <img src={burger4} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={burger5} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={burger6} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={burger7} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={burger8} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={burger9} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={milkshake} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={fries1} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={fries2} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={soda1} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={soda2} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={soda3} style={styles.foodPics} />
                </div>
                <div style={styles.picCards}>
                    <img src={soda4} style={styles.foodPics} />
                </div>
                </div>
            </div>
     );

}



export default Home;