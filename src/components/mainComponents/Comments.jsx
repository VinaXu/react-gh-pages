import Navbar from "./Navbar";
import "../Styles/Comments.css";
import { useTranslation} from "react-i18next";



const Comments = () => {

    const {t} = useTranslation();

    return (
        <>
            <Navbar />
            <div className="container">
                <br />
                <h1 className="text-center">{t("Comments")}</h1>
                <br />
                <div className="comment">
                    <img src="https://source.unsplash.com/6anudmpILw4/200x200" alt={t("represents the user")} />
                    <div className="card">
                        <div className="card-title">
                            <h5>James Gun</h5>
                            <h6> 7 {t("days ago")} </h6>
                        </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim repudiandae labore explicabo saepe nemo iure similique, beatae qui laboriosam?
                            </p>
                    </div>
                </div>
                
                <div className="comment">
                    <img src="https://source.unsplash.com/ff5K3-kYPHA/200x200" alt={t("represents the user")} />
                    <div className="card">
                        <div className="card-title">
                            <h5> Hannah Bassing</h5>
                            <h6> 6 {t("days ago")} </h6>
                        </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim repudiandae labore explicabo saepe nemo iure similique, beatae qui laboriosam?
                            </p>
                    </div>
                </div>
                <div className="comment">
                    <img src="https://source.unsplash.com/NoRsyXmHGpI/200x200" alt={t("represents the user")} />
                    <div className="card">
                        <div className="card-title">
                            <h5>Brooke Cagle </h5>
                            <h6> 6 {t("days ago")} </h6>
                        </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim repudiandae labore explicabo saepe nemo iure similique, beatae qui laboriosam?
                            </p>
                    </div>
                </div>
                <div className="comment">
                    <img src="https://source.unsplash.com/sibVwORYqs0/200x200" alt={t("represents the user")} />
                    <div className="card">
                        <div className="card-title">
                            <h5>Ayo Gunta</h5>
                            <h6> 5 {t("days ago")}</h6>
                        </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim repudiandae labore explicabo saepe nemo iure similique, beatae qui laboriosam?
                            </p>
                    </div>
                </div>
                <div className="comment">
                    <img src="https://source.unsplash.com/YUu9UAcOKZ4/200x200" alt={t("represents the user")} />
                    <div className="card">
                        <div className="card-title">
                            <h5>Ben Den</h5>
                            <h6> 4 {t("days ago")} </h6>
                        </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim repudiandae labore explicabo saepe nemo iure similique, beatae qui laboriosam?
                            </p>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default Comments;