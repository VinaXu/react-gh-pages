import React from "react";

const  Snakeview= (props) => {

    return ( 

        <div className="select">
            <li > {props.name} <b> <small> ${props.price}</small></b> </li>
        </div>
     );
}
 
export default Snakeview;