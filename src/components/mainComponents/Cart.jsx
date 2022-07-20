import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../Styles/Cart.css";
import { useTranslation } from "react-i18next";

const Cart = () => {
    const {t} = useTranslation();


    return (
        <div>
            <Navbar />
            <div className="container">
            <table>
                    <thead>
                    <tr>
                       <th>{t("Item Name")}</th>
                       <th>{t("Price")}</th>
                       <th>{t("Quantity")}</th>
                       <th>{t("Options")}</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t("bath and care")}</td>
                            <td>$ 200</td>
                            <td>2 </td>
                            <td> 
                                <span className="btn btn-primary m-1"><i className="fa-solid fa-plus"></i> </span>
                                <span className="btn btn-success m-1"><i className="fa-solid fa-minus"></i> </span>
                                <span className="btn btn-danger m-1"><i className="fa-solid fa-trash-can"></i></span>
                            </td>
                        </tr>
                        <tr>
                            <td>{t("Wet food")}</td>
                            <td>$ 250</td>
                            <td>2 </td>
                            <td> 
                                <span className="btn btn-primary m-1"><i className="fa-solid fa-plus"></i> </span>
                                <span className="btn btn-success m-1"><i className="fa-solid fa-minus"></i> </span>
                                <span className="btn btn-danger m-1"><i className="fa-solid fa-trash-can"></i></span>
                            </td>
                        </tr>
                        <tr>
                            <td>{t("nail and bath")}</td>
                            <td>$ 200</td>
                            <td>1</td>
                            <td> 
                                <span className="btn btn-primary m-1"><i className="fa-solid fa-plus"></i> </span>
                                <span className="btn btn-success m-1"><i className="fa-solid fa-minus"></i> </span>
                                <span className="btn btn-danger m-1"><i className="fa-solid fa-trash-can"></i></span>
                            </td>
                        </tr>
                        <tr>
                            <td>{t("cages and matting material")}</td>
                            <td>$ 150</td>
                            <td>3</td>
                            <td> 
                                <span className="btn btn-primary m-1"><i className="fa-solid fa-plus"></i> </span>
                                <span className="btn btn-success m-1"><i className="fa-solid fa-minus"></i> </span>
                                <span className="btn btn-danger m-1"><i className="fa-solid fa-trash-can"></i></span>
                            </td>
                        </tr>
                        <tr>
                            <td> {t("Clothing")}</td>
                            <td>$ 100</td>
                            <td>4 </td>
                            <td> 
                                <span className="btn btn-primary m-1"><i className="fa-solid fa-plus"></i> </span>
                                <span className="btn btn-success m-1"><i className="fa-solid fa-minus"></i> </span>
                                <span className="btn btn-danger m-1"><i className="fa-solid fa-trash-can"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="total">
                    <h2><strong>{t("Total")} : </strong> <span>$ 900 </span></h2>
                </div>


                <br />
                <button className="btn btn-primary">
                <Link to="/react-gh-pages/payments">{t("Check Out")}</Link>
                </button>
                
            </div>
        </div>
    )
}

export default Cart;
