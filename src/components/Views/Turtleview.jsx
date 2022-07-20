import React from "react";

const  Turtle= (props) => {
    return ( 

        <div className="select">
            <li> {props.name} <b> <small> ${props.price}</small></b> </li>
        </div>
     );
}
 
export default Turtle;