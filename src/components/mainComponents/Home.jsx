import Navbar from "./Navbar";
import PetGallery from "./PetGallery";
import Search from "./Search";
import { CartProvider } from "react-use-cart";

const Home = () => {
    return (
        <CartProvider>
            <div>
                <Navbar />
                <Search />
                <PetGallery />          
            </div>
        </CartProvider>
    )
}

export default Home;