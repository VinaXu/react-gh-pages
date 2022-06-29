import React from "react";
import { useCart } from "react-use-cart";
import Navbar from "./Navbar";



const Cart = () => {

    const {isEmpty,  totalItems,
        totalUniqueItems, items, 
        cartTotal, updateItemQuantity,
        removeItem, emptyCart } = useCart();

        if (isEmpty) return <p className="alert alert-danger">Your Cart is empty!!</p>

    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <p> Cart ({totalUniqueItems}) Total : ({totalItems}) </p>
                </div>

                <label className="table lable-light table-hover-0">
                    <tbody>
                        {
                            items.map ((item, index) => {
                                return (
                                    <tr key={index}>
                                    <td>
                                        {item.name} 
                                    </td>
                                    <td>
                                        $ {item.price}
                                    </td>
                                    <td>
                                        Quantinty({item.quantity})
                                    </td>

                                    <button
                                    onClick={() => updateItemQuantity(item.id, item.quantity -1)}
                                     className='btn btn-outline-info ms-2'>-</button>
                                    <button
                                    onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                                    className='btn btn-outline-info ms-2'>+</button>
                                    <button
                                    onClick={()=> removeItem(item.id) }
                                    
                                    className='btn btn-outline-danger ms-2'>Remove Item</button>
                                 </tr>
                                )
                                 
                            })
                        }
                        </tbody>
                    </label>
            </div>

            <div className="col-auto ms-auto">
                    <h2>Total Price : $ {cartTotal} </h2>
                </div>
                <div className="col-auto">
                    <button className='btn btn-danger m-2'
                    onClick={() => emptyCart()}> Clear Cart</button>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
        </div>
        </div>
    );
}

export default Cart;