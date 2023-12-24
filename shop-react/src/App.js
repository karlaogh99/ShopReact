import './stile/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, {useEffect, useState} from "react";
import {PrincipalRouter} from "./router/PrincipalRouter";
import {Context} from "./component/Context";
function App() {

    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

    const [confirmedOrders, setConfirmedOrders] = useState(() => JSON.parse(localStorage.getItem('confirmedOrders')) || []);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify([cart]));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('confirmedOrders', JSON.stringify(confirmedOrders));
    }, [confirmedOrders]);

    const resetCarrito = () => {
        setCart([])
        localStorage.setItem('cart', JSON.stringify([]));
        setShowModal(false);
    };
    const resetPedidos = () => {
        setConfirmedOrders([]);
        localStorage.setItem('confirmedOrders', JSON.stringify([]));
    }

    useEffect(() => {
        resetCarrito();
    }, []);

  return (
      <div className="App">
          <Context.Provider
              value={{
                  show, setShow,
                  resetCarrito,
                  selectedProduct, setSelectedProduct,
                  cart, setCart,
                  confirmedOrders, setConfirmedOrders,
                  showModal, setShowModal,
                  resetPedidos
              }}>
              <PrincipalRouter/>
          </Context.Provider>
      </div>

  );
}

export default App;
