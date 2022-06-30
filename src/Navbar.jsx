import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Navbar = () => {
    const {totalItems} = useCart();

    return (
        <div className="nav-links">
            <img src="https://source.unsplash.com/pOUA8Xay514" alt="cute-pet" />
            <ul >                
                <li><Link to="/react-gh-pages/"> Home</Link> </li>
                <li><Link to="/react-gh-pages/staff"> Staff Introduction</Link></li>
                <li><Link to="/react-gh-pages/services">Services</Link></li>
                <li><Link to="/react-gh-pages/petbreeds">Pet Breeds</Link></li>
                <h1>Pet House</h1>
                {/* <li><Link to="/react-gh-pages/brands">Brands</Link></li> */}
                <li><Link to="/react-gh-pages/notifications">Notifications</Link></li>
                <li><Link to="/react-gh-pages/comments">Comments</Link></li>
                <li><Link to="/react-gh-pages/cart" ><i className="fa-solid fa-cart-shopping"></i> {totalItems} </Link></li>

            </ul>
        </div>


    );
}

export default Navbar;





