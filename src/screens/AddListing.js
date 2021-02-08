import "./AddListing.css";
import {useState} from "react";
import backendurl from "../config/config";
import {useHistory} from "react-router-dom";
const AddListing = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const history = useHistory();

    const addListing = async () => {
        const body = {
            name: name,
            description: description,
            price: price,
            images: [
                "https://s3.amazonaws.com/newhobbyfarms.com/wp-content/uploads/2014/08/25124856/price-produce_Flickr-600x346.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg"
            ],
        };

        await fetch(`${backendurl}/products/`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
        history.push("/");
    };

    return(
        <div className="addListing">
            <h1 className="addListing__title">Add a new Listing</h1>
            <div className="addListing__name">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="addListing__description">
                <label>Description:</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="addListing__price">
                <label>Price:</label>
                <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
            </div>
            <button disabled={!(name&&description&&price)} onClick={()=>addListing()}>Add</button>
        </div>
    );
};
export default AddListing;