import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import '../../styles/ProductDetail.scss'

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
    <Container fluid className="mt-3 p-2">
     
      
       
        <div className="d-flex productDetail">
            <img src={product.thumbnail} />
            <div className="d-flex align-items-center ">
              <h2>{product.brand}</h2>
              <p>{product.description}</p>
              <p>R$ {product.price}</p>
              </div>
        </div>
      
      
        <Col className="mt-5 " md={6}>
          <h3>Veja outros produtos</h3>
          <Row>
            {randomProducts.slice(0, 4).map((prod) => (
              <Col xs={6} md={4} key={prod.id} className="d-flex">
                <Card className="product-card d-flex flex-row p-1">
                  <Card.Img variant="left d-flex w-50" src={prod.images?.[0]} />
                  <Card.Body className="d-flex row p-2 m-2 ">
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text style={{color: "#F3BD30"}}>R$ {prod.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
     
    </Container>
  );
};

export default ProductDetail;
