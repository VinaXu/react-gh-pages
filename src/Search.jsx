import React from "react";
import servicelist from "./Service";

import { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <div className="search">
                <input onChange={event => {setSearchTerm(event.target.value)} } placeholder="Search services by breed..." type="text" />
                <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className="container">
                {
                    servicelist.filter((val) => {
                        if (searchTerm == ""){
                            return null
                        }
                        else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                            return val
                        }
                        
                    }).map((val, key) => {
                        return(
                            <div className="services m-3" key={key}>
                                <table>
                                    <tr>
                                        <td> {val.title} </td>
                                        <td>{val.service} </td>
                                        <td> <strong>$ {val.price} </strong></td>
                                    </tr>
                                </table>
                            </div>

                        )
                    })
                }
            </div>
        </div>
        
        
    );
}

export default Search;


