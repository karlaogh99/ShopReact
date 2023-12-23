import React from "react";
import { Link} from "react-router-dom";
import {Card, ListGroup} from "react-bootstrap";
export const ProductShow = ({product}) => {

    const goViewDetail = () => {
        localStorage.setItem('product', JSON.stringify(product));
    }

    return (
        <Card className="product-card">
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Img variant="top" src={product.img}/>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <Link to={"/details"} className="details-btn" onClick={goViewDetail}>
                            Ver detalles
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item><b>Precio: {product.price} €</b></ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}
