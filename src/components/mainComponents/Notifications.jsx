import Navbar from "./Navbar";
import "../Styles/Notifications.css";
import { useTranslation} from "react-i18next";


const Notifications = () => {
    const {t} = useTranslation();

    return (
        <>
            <Navbar />
            <br />
            <div className="container notifications">
                <br />
                <h1 className="text-center">{t("Notifications")}</h1>
                <br />
                <div className="content">
                    <div className="twitter">
                        <div className="row">
                            <div className="col-md-4">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className="col-md-8">
                            <div className="card-title">
                        
                                <h5><strong>{t("Join us on twitter")}</strong></h5>
                                </div>
                                <p>{t("Join the conversation and be on the loop")}</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="youtube">
                        <div className="row">
                            <div className="col-md-4">
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                            <div className="col-md-8">
                            <div className="card-title">
                        
                                <h5><strong>{t("Follow us on YouTube")}</strong></h5>
                                </div>
                                <p>{t("Never miss a new video update")}</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="instagram">
                        <div className="row">
                            <div className="col-md-4">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className="col-md-8">
                            <div className="card-title">
                        
                                <h5><strong>{t("View pet and owner stories")}</strong></h5>
                                </div>
                                <p>{t("Get the unscripted pet stories stories told by our users")} </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="facebook">
                        <div className="row">
                            <div className="col-md-4">
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className="col-md-8">
                            <div className="card-title">
                        
                                <h5><strong>{t("Chat with our web experts")}</strong></h5>
                                </div>
                                <p>{t("Get immediate feedback from our online crew in minutes!")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    )
}

export default Notifications;
