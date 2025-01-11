import footerContact from "../../api/footerApi.json"
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbMailHeart } from "react-icons/tb";


export const Footers = () => {

const footerIcon ={
    FaMapLocationDot: <FaMapLocationDot />,
    BiSolidPhoneCall: <BiSolidPhoneCall />,
    TbMailHeart: <TbMailHeart />
};


    
    return <footer className="footer-section">
        <div className="container grid grid-three-cols">

            {
                footerContact.map((curData, index) => {
                    const { icon, title, details } = curData;
                    return (
                        <div className="footer-contact" key={index}>
                            <div className="icon">{footerIcon[icon]}</div>
                            <div className="footer-contact-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    );
                })
            }

        </div>
    </footer>
};



