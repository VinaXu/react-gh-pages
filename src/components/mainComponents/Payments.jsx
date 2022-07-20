import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Payments = () => {
    const {t} = useTranslation();

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="justfiy-content-center text-center m-3">{t("Payments")}</h1>
                
                <h6 className="text-center m-2"> <b>{t("Total")} {t("Price")}: $ 900 </b> </h6>

                <div className="container">


                    <form className="col-md-6 col-sm-7 text-center">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">{t("Card Number")}</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">{t("Expiration Date")}</span>
                            <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">{t("CVV")}</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">{t("CVV")} {t("Expiration Date")}</span>
                            <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">{t("Your Address")}</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">{t("Your phone number")}</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                        </div>
                        <button type="submit"   className="btn btn-success text-center m-3"><Link to='/react-gh-pages/checkout' className="text-light">{t("Confirm Order")}</Link> </button>
                    </form>
                    
                </div>
            </div> <br /><br />
        </>
    )
}

export default Payments;
