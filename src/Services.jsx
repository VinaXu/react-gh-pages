import React from "react";

import Navbar from "./Navbar";

const Services = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="container services">
                <h1>Services</h1>
                <table>
                    <tr>
                       <td> <b>Pet Breeds</b></td>
                       <td><b> Services Details</b></td>
                       <td><b>Price</b></td>
                    </tr>
                    <tr>
                        <td>Lorem, ipsum.</td>
                        <td>Lorem, ipsum.</td>
                        <td className="price"> $ 45</td>   
                    </tr>
                    <tr>
                        <td>Lorem, ipsum.</td>
                        <td>Lorem, ipsum.</td>
                        <td className="price"> $ 45</td>   
                    </tr>
                    <tr>
                        <td>Lorem, ipsum.</td>
                        <td>Lorem, ipsum.</td>
                        <td className="price"> $ 45</td>   
                    </tr>
                    <tr>
                        <td>Lorem, ipsum.</td>
                        <td>Lorem, ipsum.</td>
                        <td className="price"> $ 45</td>   
                    </tr>
                    <tr>
                        <td>Lorem, ipsum.</td>
                        <td>Lorem, ipsum.</td>
                        <td className="price"> $ 45</td>   
                    </tr>
                    <tr>
                        <td>Lorem, ipsum.</td>
                        <td>Lorem, ipsum.</td>
                        <td className="price"> $ 45</td>   
                    </tr>
                    <tr>
                        <td>Lorem, ipsum.</td>
                        <td>Lorem, ipsum.</td>
                        <td className="price"> $ 45</td>   
                    </tr>
                    <tr>
                        <td>Lorem, ipsum.</td>
                        <td>Lorem, ipsum.</td>
                        <td className="price"> $ 45</td>   
                    </tr>
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