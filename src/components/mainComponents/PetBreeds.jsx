import doglist from "../Database/doglist";
import catlist from "../Database/Catlist";
import fishlist from "../Database/Fishlist";
import birdlist from "../Database/Bird";
import snakelist from "../Database/Snake";
import hamsterlist from "../Database/Hamster";
import turtlelist from "../Database/Turtle";
// views
import Dogview from "../Views/dogview";
import Catview from "../Views/catview";
import Fishview from "../Views/Fishview";
import Birdview from "../Views/Birdview";
import Hamsterview from "../Views/Hamsterview";
import Snakeview from "../Views/Snakeview";
import Turlteview from "../Views/Turtleview";
import Navbar from "./Navbar"
// style
 import '../Styles/Petbreeds.css';
import { useTranslation} from "react-i18next";


const PetBreeds = () => {
    const {t} = useTranslation();

    return (
       <>
         <Navbar />
         <div className="container petbreeds">
                <h2 className="text-center"> {t("Pet Breeds")}</h2>
                <br />
                <table>
                    <thead>
                    <tr>
                        <th>{t("Dogs")}</th>
                        <th>{t("Cats")}</th>
                        <th>{t("Fish")}</th>
                        <th>{t("Bird")}</th>
                        <th>{t("Hamster")}</th>
                        <th>{t("Snake")}</th>
                        <th>{t("Turtle")}</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    {
                                        doglist.map((item, index) => {
                                            return (
                                                <Dogview name={item.name} price={item.price} item={item} key={index}  />
                                            )
                                        })
                                    }
                                </ul>
                            </td>
                            <td> 
                                <ul>
                                    {
                                    catlist.map((item, index) => {
                                        return (
                                            <Catview name={item.name} price={item.price} item={item} key={index}  />
                                            )
                                        })
                                    }                               
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {
                                    fishlist.map((item, index) => {
                                            return (
                                                <Fishview name={item.name} price={item.price} item={item} key={index}  />
                                            )
                                        })
                                    }
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {
                                        birdlist.map((item, index) => {
                                            return (
                                                <Birdview name={item.name} price={item.price} item={item} key={index}  />
                                                )
                                            })
                                    }                               
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {
                                        hamsterlist.map((item, index) => {
                                            return (
                                                <Hamsterview name={item.name} price={item.price} item={item} key={index}  />
                                            )
                                        })
                                    }                             
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {
                                        snakelist.map((item, index) => {
                                            return (
                                                <Snakeview name={item.name} price={item.price} item={item} key={index}  />
                                            )
                                        })
                                    }                              
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {
                                        turtlelist.map((item, index) => {
                                            return (
                                                <Turlteview name={item.name} price={item.price} item={item} key={index}  />
                                            )
                                        })
                                    }                            
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br /><br />
       </>
    )
}

export default PetBreeds;