import { CiHome } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import './index.css'

const Header = () => (
    <nav className="nav-container center-view ">
        <div>
            <p>Chat / Feed chat</p>
        </div>
        <div className="center-view"> 
            <div className="center-view">
                <CiHome className="spacing-val header-icon"/>
                <div className="spacing-val">
                    <p className="nav-element yellow-container">Process Owner HOD</p>
                </div>
            </div>
            <div className="center-view">
                <div className="spacing-val">
                    <button type="button" className="header-admin-btn">Admin</button>
                </div>
                <div className="spacing-val">
                    <p>Palak Bansal</p>
                </div>
                <div className="spacing-val">
                    <img src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1733047560/Ellipse_3855_yz8yga.png" alt="profile" className="image-profile" />
                </div>
            </div>
            <div className="center-view">
                <CiSettings className="spacing-val header-icon"/>
                <button className="logout-btn">
                    <div className="center-view">
                        <PiSignOut className="header-icon spacing-val" />
                        <p className="">Logout</p>
                    </div>
                </button>
            </div>
        </div>
    </nav>
)

export default Header