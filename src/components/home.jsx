import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return ( 
        <div>
            <h1>Insert logos, text, fetch data and stuff here</h1>
            <Link to="/menu">Menu</Link>
        </div>
     );
}

export default Home;