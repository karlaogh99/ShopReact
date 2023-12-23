import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";
import ProductList from "../views/ProductList";
import {Home} from "../views/Home";
import ProductDetail from "../views/ProductDetail";
import Carrito from "../views/Carrito";
import Orders from "../views/Orders";

export const PrincipalRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Screen><Home/></Screen>}/>
                    <Route path="/product" element={<Screen><ProductList/></Screen>}/>
                    <Route path="/cart" element={<Screen><ProductList/></Screen>}/>
                    <Route path="/orders" element={<Screen><Orders/></Screen>}/>
                    <Route path="/details" element={<Screen><ProductDetail/></Screen>}/>
                    <Route path="/carrito" element={<Screen><Carrito/></Screen>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
const Screen = ({children}) => (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>

);