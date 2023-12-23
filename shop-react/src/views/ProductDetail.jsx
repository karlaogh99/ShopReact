import React, {useContext, useState} from 'react';
import {Button, Card} from 'react-bootstrap';
import {Context} from "../component/Context";
import {useLocation} from "react-router";
import { useNavigate} from "react-router-dom";
const ProductDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { cart, setCart} = useContext(Context);

    const addCart = () => {
        const tempCart = [...cart, product];
        setCart(tempCart);
        handleClose();
    }
    const handleClose = () => {
        navigate(location.pathname);
    }
    const [product] = useState(() => JSON.parse(localStorage.getItem('product')) || []);

    return (
        <Card className="d-flex flex-column align-items-center">
                <Card.Img variant="top" src={product.img} style={{ width: '550px',  height: '550px' }} />
                <Card.Body >
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                <Button variant="primary" onClick={addCart}><i className="bi bi-cart-plus"></i> Añadir al Carrito</Button>
            </Card.Body>



        </Card>

    );
};

export default ProductDetail;