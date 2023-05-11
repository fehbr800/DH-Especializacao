
import { useState, useEffect } from "react";
import axios from "axios";
import '../../styles/Home.scss';
import NavBar from "../../components/NavBar.jsx";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

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
<Container fluid className="p-0">
          

                <div className="mt-5 d-flex flex-wrap p-2 justify-content-center">
                    {product.map((product) => (
                        <Link className="text-decoration-none text-black" to={'/productDetails/:id'}>
                        <div className="product p-1 m-2 d-flex flex-wrap"  key={product.id}>
                            <img
                                className="product-image p-1 flex-wrap"
                                src={product.images[0]}
                                alt={product.title}
                            />
                            <div className="card-body d-flex flex-column flex-wrap mx-1 justify-content-center align-content-center">
                                <h5 className="product-title">{product.title}</h5>
                                <h5 className="product-brand mt-1">{product.brand}</h5>
                                <h5 className="product-price mt-1">R$ {product.price}</h5>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
           
            </Container>
        </>
    )
}