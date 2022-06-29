import React from "react";
import './App.css';

import Navbar from './Navbar';
import Search from "./Search";
import PetGallery from "./PetGallery";


const HomePage = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="container">
                < Search />

                <PetGallery />

            </div>
        </div>
    );
}

export default HomePage;