import { Link, useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";
import '../Styles/Navbar.css';
import { useTranslation} from "react-i18next";


const Navbar = () => {

    const {t, i18n} = useTranslation();
    const handleLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    }

    const {totalItems} = useCart();
    const location = useLocation();

    const { pathname } = location;
    const splitPath = pathname.split("/");

    return (
        <>
            <nav className="navbar">
                <div className="logo"><img src="https://source.unsplash.com/Ivzo69e18nk" alt="shows the pet logo"/> {t("title")} </div>
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li className={splitPath[1] === "" ? "active" : "" }><Link to="/react-gh-pages/"> {t("Home")}</Link> </li>
                        <li className={splitPath[1] === "staff" ? "active" : "" }><Link to="/react-gh-pages/staff"> {t("Staff Introduction")}</Link></li>
                        <li className={splitPath[1] === "services" ? "active" : "" }><Link to="/react-gh-pages/services">{t("Services")}</Link></li>
                        <li className={splitPath[1] === "petbreeds" ? "active" : "" }><Link to="/react-gh-pages/petbreeds">{t("Pet Breeds")}</Link></li>
                        <li className={splitPath[1] === "notifications" ? "active" : "" }><Link to="/react-gh-pages/notifications">{t("Notifications")}</Link></li>
                        <li className={splitPath[1] === "comments" ? "active" : "" }><Link to="/react-gh-pages/comments">{t("Comments")}</Link></li>
                        <li className={splitPath[1] === "cart" ? "active" : "" }><Link to="/react-gh-pages/cart" ><i className="fa-solid fa-cart-shopping"></i> {totalItems} </Link></li>
                    </div>
                </ul>
            </nav>
            <div className=" mt-2 text-center dropdown">
                <strong><p>{t("Languages")} <i className="fa-solid fa-globe"></i> </p></strong>
                <div className="dropdown-content">
                    <button className="btn btn-outline-success " onClick={() => handleLanguage("en")} >EN</button> <span></span>
                    <button className="btn btn-outline-success " onClick={() => handleLanguage("jp")} >JP</button> <span></span>
                    <button className="btn btn-outline-success" onClick={() => handleLanguage("ch")} >CH</button>
                </div>            
            </div>
        </>
    )
}

export default Navbar;
