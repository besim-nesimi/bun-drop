import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "../styles/home-style.css";
import GetMenu from '../utils/fetch-json';

function Home() {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        GetMenu().then((data) => {setMenuData(data)});
    }, [])


    // images, men kanske finnns något bättre sätt?

    const images = {
        logo: require("../images/logo-black.png"),
        burger1: require("../images/burger-1.png"),
        burger2: require("../images/burger-2.png"),
        burger3: require("../images/burger-3.png"),
        burger4: require("../images/burger-4.png"),
        burger5: require("../images/burger-5.png"),
        burger6: require("../images/burger-6.png"),
        burger7: require("../images/burger-7.png"),
        burger8: require("../images/burger-8.png"),
        burger9: require("../images/burger-9.png"),
        milkshake: require("../images/milkshake-1.png"),
        fries1: require("../images/fries-1.png"),
        fries2: require("../images/fries-2.png"),
        soda1: require("../images/soda-1.png"),
        soda2: require("../images/soda-2.png"),
        soda3: require("../images/soda-3.png"),
        soda4: require("../images/soda-4.png")
    }

    const styles = {
        main: {
            backgroundColor: "#78aafa",
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
            display: "flex",
            justifyContent: "center",
            marginBottom: 10
        },
        bottomHalf: {
            backgroundColor: "#ffcab5",
            padding: 20,
        }
     }

    const menuItems = {};

     for (let i = 1; i <= 16; i++) {
        menuItems[`item${i}`] = menuData?.find(item => item.id === i);
     }

    return (
        <div className="main" style={styles.main}>
            <div style={styles.container}>
                <div>
                <img src={images.logo} style={styles.homelogo}/>
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
            <div style={styles.bottomHalf}>
            <div style={styles.picSection}>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.burger1} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item1 && (
                                <div key={menuItems.item1.id} style={styles.info}>
                                    {menuItems.item1.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.burger2} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item2 && (
                                <div key={menuItems.item2.id} style={styles.info} >
                                    {menuItems.item2.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.burger3} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item3 && (
                                <div key={menuItems.item3.id} style={styles.info} >
                                    {menuItems.item3.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.burger4} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item4 && (
                                <div key={menuItems.item4.id} style={styles.info} >
                                    {menuItems.item4.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.burger5} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item5 && (
                                <div key={menuItems.item5.id} style={styles.info} >
                                    {menuItems.item5.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.burger6} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item6 && (
                                <div key={menuItems.item6.id} style={styles.info}>
                                    {menuItems.item6.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.burger7} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item7 && (
                                <div key={menuItems.item7.id} style={styles.info}>
                                    {menuItems.item7.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.burger8} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item8 && (
                                <div key={menuItems.item8.id} style={styles.info}>
                                    {menuItems.item8.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.burger9} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item9 && (
                                <div key={menuItems.item9.id} style={styles.info}>
                                    {menuItems.item9.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.fries1} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item10 && (
                                <div key={menuItems.item10.id} style={styles.info}>
                                    {menuItems.item10.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.fries2} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item11 && (
                                <div key={menuItems.item11.id} style={styles.info}>
                                    {menuItems.item11.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.milkshake} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item12 && (
                                <div key={menuItems.item12.id} style={styles.info}>
                                    {menuItems.item12.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.soda1} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item13 && (
                                <div key={menuItems.item13.id} style={styles.info}>
                                    {menuItems.item13.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.soda2} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item14 && (
                                <div key={menuItems.item14.id} style={styles.info}>
                                    {menuItems.item14.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.soda3} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item15 && (
                                <div key={menuItems.item15.id} style={styles.info}>
                                    {menuItems.item15.description}
                                </div>
                                )
                            }
                    </div>
                </div>
                <div style={styles.picCards}>
                    <div style={styles.container}>
                        <img src={images.soda4} style={styles.foodPics} />
                    </div>
                    <div >
                            {
                            menuItems.item16 && (
                                <div key={menuItems.item16.id} style={styles.info}>
                                    {menuItems.item16.description}
                                </div>
                                )
                            }
                    </div>
                </div>
            </div>
            </div>
        </div>
     );

}



export default Home;