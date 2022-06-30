import React from "react";
import servicelist from "./Service";

import { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <div className="search">
                <input onChange={event => {setSearchTerm(event.target.value)} } placeholder="Search for services..." type="text" />
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className="container">
                {
                    servicelist.filter((val) => {
                        if (searchTerm == ""){
                            return null
                        }
                        else if(val.service.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                            return val
                        }
                    }).map((val, key) => {
                        return(
                            <div key={key}>
                                <table>
                                    <tr>
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


