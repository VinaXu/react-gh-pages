import React from "react";

const Birdview = (props) => {
    
    return ( 

        <div className="select">
            <li ><span> </span> {props.name} <b> <small> ${props.price}</small></b> </li>
        </div>
     );
}
 
export default Birdview;