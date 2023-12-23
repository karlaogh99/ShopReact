import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmacionPedidoModal = ({  onHide, numeroPedido }) => {
    return (
        <Modal show={true} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>¡Pedido Confirmado!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Tu pedido se ha confirmado : {numeroPedido} </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmacionPedidoModal;