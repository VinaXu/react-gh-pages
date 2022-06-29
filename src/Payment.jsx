import Navbar from "./Navbar";

const Payment = () => {
    return ( 
        <div className="container-fluid">
            <Navbar/>
            <h1 className="justfiy-content-center text-align-center">Payments</h1>
            <div className="container">
            <div className="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Card number</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Expiration Date</span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">CVV</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Your Address</span>
                <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Your phone number</span>
                <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Desired date of delivery</span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <button className="btn btn-success">Confirm order</button>
            </div>
        </div>
     );
}
 
export default Payment;
