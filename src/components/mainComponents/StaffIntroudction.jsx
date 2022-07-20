import Navbar from './Navbar';
import { useTranslation} from "react-i18next";


const StaffIntroudction = () => {
    const {t} = useTranslation();

    return (
        <>
            <Navbar />
        <div className="container gallery">
            <br /><br />
            <h1 className="text-center"> {t("Staff Introduction")}</h1> <br />
            <h4 className='text-center'>{t("below")} </h4>
            <ul >
                <li>
                    <img src="https://source.unsplash.com/ybZ5hRxaWS4" alt="staff and pet" />
                    <div className="overlay">
                        <span><h5>James Dean</h5>
                            <hr />
                            <ol className='oderlist'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur. Laudantium, optio?</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ol>
                        </span>
                    </div>
                </li>
                <li>
                    <img src="https://source.unsplash.com/38Un6Oi5beE" alt="staff and pet" />
                    <div className="overlay">
                        <span><h5>Charles Powell</h5>
                            <hr />
                            <ol className='oderlist'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur. Laudantium, optio?</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ol>
                        </span>
                    </div>
                </li>
                <li>
                    <img src="https://source.unsplash.com/ZzEgfT9Fxn4" alt="staff and pet" />
                    <div className="overlay">
                        <span><h5>Frank Owen</h5>
                            <hr />
                            <ol className='oderlist'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur. Laudantium, optio?</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ol>
                        </span>
                    </div>
                </li>
                <li>
                    <img src="https://source.unsplash.com/kGCR2C4R_FQ" alt="staff and pet" />
                    <div className="overlay">
                        <span><h5>Jane Doe</h5>
                            <hr />
                            <ol className='oderlist'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur. Laudantium, optio?</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ol>
                        </span>
                    </div>
                </li>
                <li>
                <img src="https://source.unsplash.com/vviU2k3SN-s" alt="staff and pet" />
                    <div className="overlay">
                        <span><h5>Grace Persons</h5>
                            <hr />
                            <ol className='oderlist'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur. Laudantium, optio?</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ol>
                        </span>
                    </div>
                </li>
                <li>
                <img src="https://source.unsplash.com/qLzWvcQq-V8" alt="staff and pet" />
                    <div className="overlay">
                        <span><h5>Jennifer Parks</h5>
                            <hr />
                            <ol className='oderlist'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur. Laudantium, optio?</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ol>
                        </span>
                    </div>
                </li>
                <li>
                <img src="https://source.unsplash.com/Mb7LPvadxHY" alt="staff and pet" />
                    <div className="overlay">
                        <span><h5>Janet Harley</h5>
                            <hr />
                            <ol className='oderlist'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur. Laudantium, optio?</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ol>
                        </span>
                    </div>
                </li>
                <li>
                <img src="https://source.unsplash.com/Y6GZ97S-mcY" alt="staff and pet" />
                    <div className="overlay">
                        <span><h5>Brilliant Hash</h5>
                            <hr />
                            <ol className='oderlist'>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur. Laudantium, optio?</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet.</li>
                                <li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ol>
                        </span>
                    </div>
                </li>               
            </ul>
        </div>
        </>
    )
}

export default StaffIntroudction;
