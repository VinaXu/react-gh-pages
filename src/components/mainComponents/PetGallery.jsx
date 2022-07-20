import '../Styles/PetGallery.css';
import { useTranslation} from "react-i18next";

const PetGallery = () => {

    const {t} = useTranslation();

    return(
        <div className="container gallery">
            <br /><br />
            <h1 className="text-center">{t("Pet Gallery")}</h1>
            <ul>
                <li>
                    <img src="https://source.unsplash.com/Ivzo69e18nk/200x200" alt={t("gallery")} />
                    <div className="overlay"><span>{t("My Cute Pets")}</span></div>
                </li>
                <li>
                    <img src="https://source.unsplash.com/gWzTum_yMCg/200x200" alt="gallery" />
                    <div className="overlay"><span>{t("Chilling with my cat and dog after a good service")} </span></div>
                </li>
                <li>
                    <img src="https://source.unsplash.com/2_3c4dIFYFU/200x200" alt={t("gallery")} />
                    <div className="overlay"><span>{t("Out day")}</span></div>
                </li>
                <li>
                    <img src="https://source.unsplash.com/FtuJIuBbUhI/200x200" alt={t("gallery")} />
                    <div className="overlay"><span>{t("My hero")}</span></div>
                </li>
                <li>
                    <img src="https://source.unsplash.com/CXQgs12wFHc/200x200" alt={t("gallery")} />
                    <div className="overlay"><span>{t("My cute nash gives me smiles all day")}</span></div>
                </li>
                <li>
                    <img src="https://source.unsplash.com/OPAUTV_6n10/200x200" alt={t("gallery")}/>
                    <div className="overlay"><span>{t("Playing with Mr.cuddles")} </span></div>
                </li>
                <li>
                    <img src="https://source.unsplash.com/w2DsS-ZAP4U/200x200" alt={t("gallery")}/>
                    <div className="overlay"><span>{t("when she is serious")}</span></div>
                </li>
                <li>
                    <img src="https://source.unsplash.com/7j4i2p-lVMc/200x200" alt={t("gallery")} />
                    <div className="overlay"><span>{t("Nap time")}</span></div>
                </li>
            </ul>
        </div>
    )
}

export default PetGallery;