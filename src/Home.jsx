import React from "react";
import './App.css';

import Navbar from './Navbar';
import Search from "./Search";
import PetGallery from "./PetGallery";
import { CartProvider } from "react-use-cart";


const HomePage = () => {
    return (
        <CartProvider>
            <div className="container-fluid">
            <Navbar />
            <div className="container">
                < Search />

                <PetGallery />

            </div>
        </div>
        </CartProvider>
    );
}

export default HomePage;