import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../Styles/Checkout.css";
import Navbar from "./Navbar";

const Checkout = () => {

    const {t} = useTranslation();

    return(
        <>
        <Navbar />
        <div className="container checkout">
            <div className=" text-center"> 
                <h2>{t("Congratulations")}!</h2>
            </div>
            <p> {t("message 1")} </p>
            <p> {t("message 2")}, <br /> <br /> {t("message 3")} </p>

            <button className="btn btn-success"><Link to='/react-gh-pages'> {t("Home")} </Link> </button>
        </div>
        </>
    )
}

export default Checkout;
