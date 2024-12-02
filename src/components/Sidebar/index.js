import { AiOutlineFileSearch } from "react-icons/ai";
import { RiFileCheckFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { LiaSitemapSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import { PiNumberCircleOneLight } from "react-icons/pi";
import { PiNumberCircleTwo } from "react-icons/pi";
import { LuWrench } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { CiGift } from "react-icons/ci";
import './index.css'

const Sidebar = () => (
    <div className="side-container ">
        <div className="image-container">
            <img src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1733036283/riskhawk-logo_1_uc21o3.png" alt="logo" className="image-element" />
        </div>
        <ul className="unorder-list-container">
            <li className="icon-description-container">
                <AiOutlineFileSearch className="icon" />
                <p className="description">Internal Audit</p>
            </li>
            <li className="icon-description-container">
                <RiFileCheckFill className="icon" />
                <p className="description">UAT Testing</p>
            </li>
            <li className="icon-description-container">
                <FaLink className="icon" />
                <p className="description">Intract</p>
            </li>
            <li className="icon-description-container">
                <FaUsers className="icon" />
                <p className="description">Queue</p>
            </li>
            <li className="icon-description-container">
                <LiaSitemapSolid className="icon" />
                <p className="description">Workflow</p>
            </li>
            <li className="icon-description-container">
                <FaRegUser className="icon" />
                <p className="description">Admin</p>
            </li>
            <li className="icon-description-container">
                <BsBox className="icon" />
                <p className="description">Asset</p>
            </li>
            <li className="icon-description-container">
                <FaUsers className="icon" />
                <p className="description">Parent</p>
            </li>
            <li className="icon-description-container">
                <PiNumberCircleOneLight className="icon" />
                <p className="description">Option One</p>
            </li>
            <li className="icon-description-container">
                <PiNumberCircleTwo className="icon" />
                <p className="description">Option Two</p>
            </li>
            <li className="icon-description-container">
                <LuWrench className="icon" />
                <p className="description">All Accessories</p>
            </li>
            <li className="icon-description-container">
                <AiOutlineFileSearch className="icon" />
                <p className="description">Internal Audit</p>
            </li>
            <li className="icon-description-container">
                <BsStars className="icon" />
                <p className="description">Decorating</p>
            </li>
            <li className="icon-description-container"> 
                <CiGift className="icon" />
                <p className="description">Presenting</p>
            </li>
        </ul>
    </div>
)

export default Sidebar