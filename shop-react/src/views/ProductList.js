import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import articles from '../articles.json'
import {ProductShow} from "../component/ProductShow";
const ProductList = () => {
    return (
        <Card>
            <div>
                <h1 className="center-text">Articulos en venta</h1>
                <div className="">
                    <div className="products-list">
                        {articles.length === 0 ? (
                            <p>No hay resultados en la búsqueda.</p>
                        ) : (
                            <Row xs={1} md={5} className="g-1">
                                {articles.map((product, index) => (
                                    <Col key={index}>
                                        <ProductShow product={product}/>
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </div>
                </div>
            </div>
        </Card>

    );
};

export default ProductList;