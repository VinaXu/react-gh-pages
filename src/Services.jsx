import React from "react";
import Serviceview from "./components/Serviceview";

import Navbar from "./Navbar";
import servicelist from "./Service";

const Services = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="container services">
                <h1>Services</h1>
                <table>
                    <tr>
                        <td><b>Pet Breeds</b>

                        </td>
                        <td> <strong>Seervice DEscription</strong> </td>
                        <td> <strong>Price</strong></td>
                    </tr>
                    
                    {
                            servicelist.map((item, index) => {
                                return (
                                    <Serviceview service={item.service} price={item.price} key={index}/>

                                )
                            })
                        } 
                </table>

                                   

                <div className="address">
                    <h4><b>Address : </b>114 Avenue Ching Drive</h4>
                    <h4><b> Phone Number :</b> 555 5555 5555 </h4>

                    <p>Feel free to call and make an appointment! </p>
                </div>
            </div>
        </div>
    );
}

export default Services;