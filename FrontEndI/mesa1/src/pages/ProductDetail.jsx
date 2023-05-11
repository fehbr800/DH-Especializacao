import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const [showListProducts, setShowListProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    }
    getProduct();
  }, [id]);

  useEffect(() => {
    async function getOtherProducts() {
      const response = await axios.get(`https://dummyjson.com/products`);
      const filteredProducts = response.data.products.filter(
        (prod) => prod.id !== id
      );
      setShowListProducts(filteredProducts.slice(0, 4));
    }
    getOtherProducts();
  }, [id]);

  const productId = id;

  const filterProducts = showListProducts.filter(
    (product) => product.id - productId
  );

  const randomProducts = filterProducts.sort(() => Math.random() - 0.5);



  return (
    <Container className="mt-3">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.images?.[0]} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>R$ {product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <h3>Veja outros produtos</h3>
          <Row>
            {randomProducts.slice(0, 4).map((prod) => (
              <Col xs={6} md={3} key={prod.id}>
                <Card>
                  <Card.Img variant="top" src={prod.images?.[0]} />
                  <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>R$ {prod.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
