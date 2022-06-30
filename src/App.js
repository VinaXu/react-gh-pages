import React from "react";
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// pages
import HomePage from "./Home";
import StaffIntroudction from "./StaffIntroduction";
import PageNotFound from "./404";
import Services from "./Services";
import PetBreeds from "./Petbreeds";
import Notification from "./Notification";
import Brands from "./Brands";
import Comments from "./Comments";
import Cart from "./Cart";  
import Payment from "./Payment";
import { CartProvider } from "react-use-cart";
import Checkout from "./Checkout";


const App = () => {
    return (

        <CartProvider>
            <Router>
                <div className="container-fluid">

                    <Switch>
                        <Route exact path="/react-gh-pages/" component ={HomePage} />
                        <Route exact path="/react-gh-pages/staff" component ={StaffIntroudction} />
                        <Route exact path="/react-gh-pages/services" component ={Services} />
                        <Route exact path="/react-gh-pages/petbreeds" component ={PetBreeds} />
                        <Route exact path="/react-gh-pages/notifications" component ={Notification} />
                        <Route exact path="/react-gh-pages/brands" component ={Brands} />
                        <Route exact path="/react-gh-pages/comments" component ={Comments} />
                        <Route exact path="/react-gh-pages/cart" component ={Cart} />
                        <Route exact path="/react-gh-pages/payments" component ={Payment} />
                        <Route export path="/react-gh-pages/checkout" component ={Checkout}/>
                        <Route component ={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </CartProvider>
        
    );
}

export default App;


