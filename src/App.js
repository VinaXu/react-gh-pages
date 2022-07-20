import React from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import PageNotFound from "./404";

import './App.css';
import Cart from "./components/mainComponents/Cart";
import Checkout from "./components/mainComponents/Checkout";
import Comments from "./components/mainComponents/Comments";
// import Footer from "./components/mainComponents/Footer";
import Home from "./components/mainComponents/Home";
import Notifications from "./components/mainComponents/Notifications";
import Payments from "./components/mainComponents/Payments";
import PetBreeds from "./components/mainComponents/PetBreeds";
import Services from "./components/mainComponents/Services";
import StaffIntroudction from "./components/mainComponents/StaffIntroudction";

const App = () => {
    return (
        <>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/react-gh-pages/" component={Home} />
                    <Route exact path="/react-gh-pages/staff" component ={StaffIntroudction} />
                    <Route exact path="/react-gh-pages/services" component ={Services} />
                    <Route exact path="/react-gh-pages/petbreeds" component ={PetBreeds} />
                    <Route exact path="/react-gh-pages/comments" component ={Comments} />
                    <Route exact path="/react-gh-pages/notifications" component ={Notifications} />
                    <Route exact path="/react-gh-pages/cart" component ={Cart} />
                    <Route exact path="/react-gh-pages/payments" component={Payments} />
                    <Route exact path="/react-gh-pages/checkout" component={Checkout} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
        {/* <footer>
        <Footer />
        </footer> */}
        </>
    )
}

export default App;
