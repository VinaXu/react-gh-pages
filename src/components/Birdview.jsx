import React from "react";

const Birdview = (props) => {

    return ( 

        <div>
            <li><span> <i className="fa-solid fa-angles-right"></i> </span> {props.name} <b> <small> ${props.price}</small></b> </li>
        </div>
     );
}
 
export default Birdview;
