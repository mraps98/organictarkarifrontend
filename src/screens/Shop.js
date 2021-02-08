import "./Shop.css";
import backendurl from "../config/config";
import Product from "../components/Product";
import {useState, useEffect} from "react";
const Shop = () => {
    useEffect(()=>{
        fetch(`${backendurl}/products/`)
        .then(result=>result.json())
        .then(data=>{
            console.log(data);
            setProducts(data);
        });
    },[]);
    const [products, setProducts] = useState([]);
    return(
        <div className="shop">
            <div className="shop__products">
                {
                    products.map(product=>(
                        <Product key={product._id} product={product}/>
                    ))
                }
            </div>
        </div>
    );
};
export default Shop;