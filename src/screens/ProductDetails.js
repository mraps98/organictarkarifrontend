import "./ProductDetails.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import backendurl from "../config/config";
const ProductDetails = () => {
    useEffect(()=>{
        fetch(`${backendurl}/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProduct(data);
        })
    },[]);
    const {id} = useParams("id");
    const [product, setProduct] = useState({});
    return(
        <div className="productDetails">
            <h1 className="productDetails__name">{product.name}</h1>
            <Carousel>
                {
                    product.images?.map(image=>(
                        <div>
                            <img className="productDetails__image" src={image}></img>
                        </div>
                    ))
                }
            </Carousel>
            <div className="productDetails__priceWrapper"><p className="productDetails__price">${product.price}</p></div>
            <div className="productDetails__description">{product.description}</div>
            <div className="productDetails__actions">
                <button>-</button>
                <input type="text" value="0" />
                <button>+</button>
            </div>
        </div>
    );
};
export default ProductDetails;