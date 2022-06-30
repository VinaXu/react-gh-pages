import React from "react";

import Navbar from "./Navbar";

const StaffIntroudction = () => {
    return (
        <div className="container-fluid ">
            <Navbar/>
            <div className="container staff">
                <h1 className="title">Staff introduction</h1>

                <div class="row row-cols-auto">
                    <div class="col">
                        {/* detail start  */}
                        <div className="staff-details">
                            <img src="https://source.unsplash.com/ybZ5hRxaWS4" alt="staff&pet" />
                            <h1>James Powell</h1>
                            <div className="staff-services">
                                <h2>Services</h2>
                                <hr />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, suscipit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, omnis?</p>
                            </div>
                        </div>
                        {/* detail ends */}
                        {/* detail start  */}
                        <div className="staff-details">
                            <img src="https://source.unsplash.com/38Un6Oi5beE" alt="staff&pet" />
                            <h1>John Doe</h1>
                            <div className="staff-services">
                                <h2>Services</h2>
                                <hr />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, suscipit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, omnis?</p>
                            </div>
                        </div>
                        {/* detail ends */}
                        {/* detail start  */}
                        <div className="staff-details">
                            <img src="https://source.unsplash.com/ZzEgfT9Fxn4" alt="staff&pet" />
                            <h1>Frank Grillo</h1>
                            <div className="staff-services">
                                <h2>Services</h2>
                                <hr />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, suscipit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, omnis?</p>
                            </div>
                        </div>
                        {/* detail ends */}
                        {/* detail start  */}
                        <div className="staff-details">
                            <img src="https://source.unsplash.com/kGCR2C4R_FQ" alt="staff&pet" />
                            <h1>Jannise Doel</h1>
                            <div className="staff-services">
                                <h2>Services</h2>
                                <hr />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, suscipit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, omnis?</p>
                            </div>
                        </div>
                        {/* detail ends */}
                       
                    </div>
                    
                </div>
            </div>            
        </div>
    );
}

export default StaffIntroudction;