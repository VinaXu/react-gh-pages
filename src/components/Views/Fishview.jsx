import React from "react";

const Fishview = (props) => {

    return ( 

        <div className="select">
            <li ><span> </span> {props.name} <b> <small> ${props.price}</small></b> </li>
        </div>
     );
}
 
export default Fishview;