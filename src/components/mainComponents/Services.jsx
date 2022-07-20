import Navbar from "./Navbar";
import '../Styles/Services.css';
import { useTranslation} from "react-i18next";


const Services = () => {
    const {t} = useTranslation();

    return (
        <><Navbar />
            <div className="container">
                <h2 className="text-center"> {t("Services")}</h2>
                <table>
                    <thead>
                    <tr>
                        <th>{t("Pet Breeds")}</th>
                        <th>{t("Service Description")}</th>
                        <th>{t("Price")}</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t("fish breeds")}</td>
                            <td>{t("All inclusive services")}</td>
                            <td>$ 100 </td>
                        </tr>
                        <tr>
                            <td>{t("bird breeds")}</td>
                            <td>{t("basic catering")}</td>
                            <td>$ 254</td>
                        </tr>
                        <tr>
                            <td>{t("Cat breeds")}</td>
                            <td>{t("nail and bath")}</td>
                            <td>$ 140</td>
                        </tr>
                        <tr>
                            <td>{t("dog breeds")}</td>
                            <td>{t("hair triming and bath")}</td>
                            <td>$ 254</td>
                        </tr>
                        <tr>
                            <td>{t("hamster breeds")}</td>
                            <td>{t("basic catering")}</td>
                            <td>$ 200</td>
                        </tr>
                        <tr>
                            <td>{t("snake  breeds")}</td>
                            <td>{t("cages and matting material")}</td>
                            <td>$ 200</td>
                        </tr>
                        <tr>
                            <td>{t("turtle  breeds")}</td>
                            <td>{t("bath and care")}</td>
                            <td>$ 150</td>
                        </tr>
                    </tbody>
                </table> <br /><br />
                <div className="address">
                    <h3>{t("Get in touch with us!")}</h3>
                    <h5> <strong>{t("Address ")}:</strong> {t("114 Avenue Ching Drive ")}</h5>
                    <h5> <strong> {t("Phone Number")} : </strong> 555 414 124 124</h5>
                </div>
            </div>
            <br /><br /><br />
        </>
    )
}

export default Services;