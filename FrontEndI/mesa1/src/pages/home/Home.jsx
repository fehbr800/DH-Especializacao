import { useState, useEffect } from "react";
import axios from "axios";
import '../../styles/Home.scss';
import { Link } from "react-router-dom";
import { Col, Row, Card, Container } from "react-bootstrap";

export default function Home() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const response = await axios.get("https://dummyjson.com/products");
        setProduct(response.data.products);
    }

    return (
        <>
        <Container fluid className="p-3 d-flex">
        <Row xs={1} md={3} lg={4} className="">
      {product.map((product) => (
        <Col className="mt-4" key={product.id}>
             <Link className="text-decoration-none text-black" to={`/productDetails/${product.id}`}>
          <Card className="product-card d-flex flex-row p-1">
            <Card.Img variant="left d-flex w-50" src={product.images[0]} />
            <Card.Body className="d-flex row p-1 m-1 ">
              <Card.Title >{product.title}</Card.Title>
              <Card.Text >
                {product.brand}
              </Card.Text  >
              <Card.Text  style={{color: "#F3BD30"}}>
                R$ {product.price}
              </Card.Text>
           
            </Card.Body>
          </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </Container>
        </>
    )
}