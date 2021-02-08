import "./Product.css";
import {Link, useHistory} from "react-router-dom";
import backendurl from "../config/config";
const Product = ({product, isAdmin=true}) => {
    const history = useHistory();
    const deleteProduct = () => {
        fetch(`${backendurl}/products/${product._id}`,
        {
            method: "DELETE",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            window.location.reload(false);
        })
        .catch(err=>console.log(err));

    };
    return (
        <div className="product">
            <div className="product__top">
                {isAdmin&&(
                    <div className="product__topAdminOptions">
                        <button className="product__topAdminOption">Edit</button>
                        <button className="product__topAdminOption" onClick={()=>deleteProduct()}>X</button>
                    </div>
                )}
            </div>
            <Link to={`/products/${product._id}`} className="product__mid">
                {
                    <img src={product.images[0]} />
                }
            </Link>
            <div className="product__bottom">
                <Link to={`/products/${product._id}`} className="product__bottomName">{product.name}</Link>
                <div className="product__bottomSeller">Sold by: {product.sellerId} </div>
                <div className="product__bottomPrice">Price: $ {product.price} / llb</div>
                <div className="product__bottomDescription">
                    {product.description}
                </div>
            </div>
            <div className="product__options">
                <button>Add to Cart</button>
            </div>
        </div>
    );
};
export default Product;