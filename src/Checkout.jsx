import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Navbar from "./Navbar";

const Checkout = () => {
    const {cartTotal, emptyCart} = useCart();
    return ( 
        <div className="container-fluid">
            <Navbar/>
            <div className="container">
                <div className="checkout">
                    
                <h1 className="text-center ">
                    Congratulations
                </h1>

                <p>Your order summing up to <strong>$ {cartTotal}</strong> has successfully been submitted. </p>
                <p>Please wait four our delivery, <br /> Than you!</p>

                <button className="btn btn-outline-success" onClick={() => {emptyCart()}}> <Link to="/react-gh-pages/" className="text-dark">Home</Link> </button>
                </div>
            </div>
        </div>
     );
}
 
export default Checkout;
