import React from "react";
import { useCart } from "react-use-cart";

const Dogview = (props) => {
    const {addItem} = useCart();

    return ( 

        <div className="select">
            <li onClick={()=> addItem(props.item)} ><span> <i className="fa-solid fa-angles-right"></i> </span> {props.name} <b> <small> ${props.price}</small></b> </li>
        </div>
     );
}
 
export default Dogview;
