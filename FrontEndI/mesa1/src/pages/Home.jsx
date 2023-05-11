
import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Home.scss';
import NavBar from "../components/NavBar.jsx";

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

            <div className="div-product mt-3 d-flex flex-wrap p-0 flex-column">

                <div className=" justify-content-center d-flex flex-wrap p-0">
                    {product.map((product) => (
                        <div className="product p-2 m-2 d-flex" key={product.id}>
                            <img
                                className="product-image p-2"
                                src={product.images[0]}
                                alt={product.title}
                            />
                            <div className="card-body d-flex flex-column flex-wrap mx-2  justify-content-center align-start">
                                <h5 className="product-title">{product.title}</h5>
                                <h5 className="product-brand">{product.brand}</h5>
                                <h5 className="product-price">R$ {product.price}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}