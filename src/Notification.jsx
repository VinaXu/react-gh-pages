import React from "react";

import Navbar from "./Navbar";

const Notification = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <small> 2022/06/01 5:00pm </small>
                        <p> User XXX :  Your pet dog has finished nathing, please come and pick him up and take him home.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <small> 2022/04/01 2:00pm </small>
                        <p> User XXX :  Your pet dog has finished nathing, please come and pick him up and take him home.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <small> 2022/06/01 5:00pm </small>
                        <p> User XXX :  Your pet dog has finished nathing, please come and pick him up and take him home.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <small> 2022/06/01 5:00pm </small>
                        <p> User XXX :  Your pet dog has finished nathing, please come and pick him up and take him home.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;