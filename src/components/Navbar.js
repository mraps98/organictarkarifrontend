import "./Navbar.css";
import {useState} from "react";
import {Link} from "react-router-dom";
const Navbar = () =>{
    const [links, setLinks] = useState([
        {title: "Shop", url: "/"},
    ]);
    return(
        <div className="navbar">
            <div className="navbar__left">
                <Link className="navbar__leftTitle" to="/">organic tarkari</Link>
            </div>
            <div className="navbar__mid">
                {
                    links.map(link=>(
                        <Link key={link.url} className="navbar__midLink" to={link.url}>{link.title}</Link>
                    ))
                }
            </div>
            <div className="navbar__right">
                <Link to="/addListing" className="navbar__rightOption">Sell</Link>
                <Link to="/admin" className="navbar__rightOption">Admin</Link>
                <Link to="/login" className="navbar__rightOption">Login</Link>
            </div>

        </div>
    );
};
export default Navbar;