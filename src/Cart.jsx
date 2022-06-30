import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Navbar from "./Navbar";



const Cart = () => {

    const { isEmpty, items , totalItems,
        totalUniqueItems, cartTotal, updateItemQuantity, 
        removeItem, emptyCart
    } = useCart();
    if (isEmpty) return <p className="text-center  p-3 alert-danger" > Your Cart is empty !! </p>


    return (
        <div className="container-fluid">
            <Navbar />
            <section className="py-4 container">
                <div className="col-12">
                    <h6>Cart({totalUniqueItems}) Total Items: ({totalItems}) </h6>
                    
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {items.map((item, index)=> {
                                    return (
                                        <tr key={index}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                           $ {item.price}
                                        </td>
                                        <td>
                                             {item.quantity} Items
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => updateItemQuantity(item.id, item.quantity -1)}
                                            className="btn btn-info ms-2" >-</button>
                                            <button
                                                onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                                            className="btn btn-info ms-2" >+</button>
                                            <button 
                                                onClick={() => removeItem(item.id)}
                                            className="btn btn-outline-danger ms-2">Remove</button>
                                        </td>

                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <div className="col-auto ms-auto m-1">
                            <h3> Total: $ {cartTotal} </h3>
                        </div>
                        <div className="col-auto">
                            <button onClick={()=> {emptyCart()}} className="btn btn-danger m-2">Empty</button>
                            <button className="btn btn-primary m2 "> <Link className="text-light" to="/react-gh-pages/payments">Check Out</Link></button>
                        </div>

                </div>
            </section>
        </div>
    )
}

export default Cart;
