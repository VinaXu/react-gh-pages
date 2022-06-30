
import Dogview from "./components/dogview";
import Navbar from "./Navbar";
import doglist from "./components/doglist";
import Catview from "./components/catview";
import catlist from "./components/Catlist";
import Hamsterview from "./components/Hamsterview";
import hamsterlist from "./components/Hamster";
import Fishview from "./components/Fishview";
import fishlist from "./components/Fishlist";
import snakelist from "./components/Snake";
import Snakeview from "./components/Snakeview";
import birdlist from "./components/Bird";
import Birdview from "./components/Birdview";
import turtlelist from "./components/Turtle";
import Turlteview from "./components/Turtleview";


const PetBreeds = () => {
    return (
        <div>
            <div className="container-fluid">
            <Navbar />
            {/* <Cart/> */}
                <h1 className="pet-title">Pet Breeds</h1>
                <h5 className="text-center p-3 alert-success">Please select the item you want to buy by clicking on it.</h5>
                <div className="container">
                <div className="row row-cols-auto">
                    <div className="col">
                        <h4>dogs</h4>
                        <div className="pet-items">                            
                             <ul>
                                {
                                    doglist.map((item, index) => {
                                        return (
                                            <Dogview name={item.name} price={item.price} item={item} key={index}  />
                                        )
                                    })
                                }
                            </ul>
                       </div>
                    </div>
                    {/* cat */}
                    <div className="col">
                        <h4>Cats</h4>
                        <div className="pet-items">                            
                             <ul>
                             {
                                    catlist.map((item, index) => {
                                        return (
                                            <Catview name={item.name} price={item.price} item={item} key={index}  />
                                        )
                                    })
                                }                               
                            </ul>
                       </div>
                    </div>
                    {/* Fish */}
                    <div className="col">
                        <h4>Fish</h4>
                        <div className="pet-items">                            
                             <ul>
                             {
                                    fishlist.map((item, index) => {
                                        return (
                                            <Fishview name={item.name} price={item.price} item={item} key={index}  />
                                        )
                                    })
                                }                              
                            </ul>
                       </div>
                    </div>
                    {/* bird */}
                    <div className="col">
                        <h4>Bird</h4>
                        <div className="pet-items">                            
                             <ul>
                             {
                                    birdlist.map((item, index) => {
                                        return (
                                            <Birdview name={item.name} price={item.price} item={item} key={index}  />
                                        )
                                    })
                                }                               
                            </ul>
                       </div>
                    </div>
                    {/* hamster */}
                    <div className="col">
                        <h4>Hamtser</h4>
                        <div className="pet-items">                            
                             <ul>
                             {
                                    hamsterlist.map((item, index) => {
                                        return (
                                            <Hamsterview name={item.name} price={item.price} item={item} key={index}  />
                                        )
                                    })
                                }                             
                            </ul>
                       </div>
                    </div>
                    {/* snake */}
                    <div className="col">
                        <h4>Snake</h4>
                        <div className="pet-items">                            
                             <ul>
                             {
                                    snakelist.map((item, index) => {
                                        return (
                                            <Snakeview name={item.name} price={item.price} item={item} key={index}  />
                                        )
                                    })
                                }                              
                            </ul>
                       </div>
                    </div>
                    {/* turtle */}
                    <div className="col">
                        <h4>Turlte</h4>
                        <div className="pet-items">                            
                             <ul>
                             {
                                    turtlelist.map((item, index) => {
                                        return (
                                            <Turlteview name={item.name} price={item.price} item={item} key={index}  />
                                        )
                                    })
                                }                            
                            </ul>
                       </div>
                    </div>
                </div>
                </div>


            </div>
        </div>
    )
}

export default PetBreeds;

