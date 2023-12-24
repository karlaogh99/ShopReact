import React, {useContext, useEffect, useState} from "react";
import imagen from "../images/logo.png";
import carrito from "../images/carrito.png";

import {Link} from "react-router-dom";
import {Form, Nav, Navbar} from "react-bootstrap";
import {Context} from "./Context";
import '../stile/Header.css'
import Carrito from "../views/Carrito";
export const Header =() => {
    const { resetCarrito ,cart, resetPedidos  } = useContext(Context);

    const [hasItemsInCart, setHasItemsInCart] = useState(false);

    useEffect(() => {
        // Verifica si hay elementos en el carrito
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        console.log(cartItems);
        setHasItemsInCart( cartItems.length > 0 && cartItems!==[[]]);
    }, [cart]);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };
    const handleLogout = () => {
        resetCarrito();
        resetPedidos();
        setShowModal(false);
    };


    return (
        <Navbar  className="header-navbar position-sticky" expand="lg"  >
            <Link to="/"  >
                <img className="headlogo" src={imagen} alt="Logo"/>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-navbar-toggler ml-auto"/>
            {hasItemsInCart &&  (
                <Link to="/product" onClick={handleShow} >
                    <img className="headlogo" src={carrito} alt="Logo" />
                </Link>
            )}
            <Navbar.Collapse id="basic-navbar-nav" data-toggle="collapse" data-target=".navbar-collapse">
                <Nav className="product">
                    <Link className="nav-link" to="/product" >Productos</Link>
                </Nav>
                <Nav className="product">
                    <Link className="nav-link" to="/orders" >Pedidos</Link>
                </Nav>
                <Nav className="product">
                    <Link className="nav-link" to="/" onClick={handleLogout} >Cierre de sesión</Link>
                </Nav>

                <Form className="product d-flex justify-content-center align-items-center" >
                    <Form.Control placeholder="Buscar productos" />
                </Form>
            </Navbar.Collapse>

            <Carrito showModal={showModal} handleClose={handleClose} />
        </Navbar>


)
}
export default Header;