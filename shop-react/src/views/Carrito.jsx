import React, {useContext, useState} from 'react';
import { Context } from '../component/Context';
import { Modal, Button } from 'react-bootstrap';
import {useRemoveProduct} from "../hooks/useRemoveProduct";
import ConfirmacionPedidoModal from "./OrderConfirmation";

const Carrito = ({ showModal, handleClose }) => {
    const removeProduct = useRemoveProduct();
    const { resetCarrito ,cart,confirmedOrders, setConfirmedOrders  } = useContext(Context);

    const handleRemoveItem = (product) => {
        const isCartEmpty = removeProduct(product);
        removeProduct(product);
        if (isCartEmpty) {
            handleClose();
        }
    };
    const handlResetCarrito = () => {
        resetCarrito();
        handleClose();
    }
    const handleConfirmOrder = () => {
        const refNum = generarNumeroPedido();
        // Obtener la suma total del carrito
        const totalCart = cart.reduce((total, item) => total + item.price, 0);
        // Crear un nuevo objeto de pedido
        const nuevoPedido = {
            items: cart,
            total: totalCart,
            refNum: refNum,
        };

        setConfirmedOrders((confirmedOrders) => [...confirmedOrders, nuevoPedido]);
        localStorage.setItem('confirmedOrders', JSON.stringify([...confirmedOrders, nuevoPedido]));
        resetCarrito();
        handleConfirmOrder2(refNum);

    };
    const [numeroPedido, setNumeroPedido] = useState(null);

    const generarNumeroPedido = () => {
        return Math.floor(1000 + Math.random() * 9000); // Genera un número aleatorio de cuatro dígitos
    };

    const handleConfirmOrder2 = (refNum) => {
        setNumeroPedido(refNum);
        setTimeout(() => {
            window.location.href = '/orders';
        }, 2000);
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Carrito de compras</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cart.map((item, index) => (
                    <div key={index} className="d-flex align-items-center justify-content-between mb-2 cart-item">
                        <div>
                            <img src={item.img} alt={item.name} className="mr-2" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                            <span>{item.name}</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="mr-2">${item.price}</span>
                            <Button variant="danger" onClick={() => handleRemoveItem(item)}>
                                Eliminar
                            </Button>
                        </div>
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={handlResetCarrito}>
                    Limpiar carrito
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleConfirmOrder}>
                    Realizar pedido
                </Button>
            </Modal.Footer>
            {numeroPedido && (
                <ConfirmacionPedidoModal numeroPedido={numeroPedido} onHide={() => setNumeroPedido(null)} />
            )}
        </Modal>

    );
};

export default Carrito;