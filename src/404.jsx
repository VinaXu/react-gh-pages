import React from "react";

import Navbar from "./Navbar";

const PageNotFound = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="container">
                <h1>404 Page Not Found!</h1>
            </div>
        </div>
    );
}

export default PageNotFound;