import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './components/menu';
import './App.css';
import Order from './components/order';
import Payment from './components/payment';
import Home from './components/home';

function App() {
  return (

    // BrowserRouter - Routing - Setting the first page <Home /> as "/" - Now when we npm start the program, it will open at "/" which is Home component.
    // DONT FORGET TO ADD README FILE HOW-TO-USE APP
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/order" element={<Order />}/>
      <Route path="/payment" element={<Payment />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
