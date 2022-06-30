import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Navbar from "./Navbar";

const Payment = () => {

    const {cartTotal} = useCart();

    return ( 
        <div className="container-fluid">
            <Navbar/>
            <h1 className="justfiy-content-center text-center m-3">Payments</h1>
            
            <h6 className="text-center m-2"> <b>Total Price: ${cartTotal}</b> </h6>

            <div className="container">


                <form className="col-md-6 col-sm-7 text-center">
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Card number</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Expiration Date</span>
                        <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">CVV</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Expiration Date</span>
                        <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Your Address</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Your phone number</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                    </div>
                    <button type="submit"   className="btn btn-success text-center m-3"><Link to='/react-gh-pages/checkout' className="text-light">Confirm Order</Link> </button>
                </form>
                
            </div>
            
            
        </div>
     );
}
 
export default Payment;
