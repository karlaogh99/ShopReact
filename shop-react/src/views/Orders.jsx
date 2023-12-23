import React, { useContext } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Context } from '../component/Context';

const Orders = () => {
    const { confirmedOrders, setConfirmedOrders } = useContext(Context);

    const handleRemoveOrder = (refNum) => {
        const updatedOrders = confirmedOrders.filter((order) => order.refNum !== refNum);
        setConfirmedOrders(updatedOrders);
        localStorage.setItem('confirmedOrders', JSON.stringify(updatedOrders));
    };

    return (
        <Row className="justify-content-md-center">
            <Col md="auto">
                <h2>Historial de Pedidos</h2>
                {confirmedOrders.length === 0 ? (
                    <p>No hay pedidos por ahora. ¡Anímate y adquiere uno de nuestros productos!</p>
                ) : (
                    confirmedOrders.map((order) => (
                        <Card key={order.refNum} className="mb-3">
                            <Card.Header>Número de Referencia: {order.refNum}</Card.Header>
                            <Card.Body>
                                <Card.Title>Productos</Card.Title>
                                <div>
                                    {order.items.map((item) => (
                                        <div key={item.id} style={{ marginBottom: '10px' }}>
                                            <Card.Img variant="top" src={item.img} style={{ width: '150px', height: '150px' }} />
                                            <p>{item.name}</p>
                                        </div>
                                    ))}
                                </div>
                                <Card.Text>Total: {order.total.toFixed(2)}€</Card.Text>
                                <Button variant="danger" onClick={() => handleRemoveOrder(order.refNum)}>
                                    Eliminar Pedido
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </Col>
        </Row>
    );
};

export default Orders;