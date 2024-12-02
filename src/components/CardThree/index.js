import { PiPushPinThin } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import './index.css';

// const buttonNameList = [
//     {
//         id: 'ADD_ACTIONS',
//         displayText: 'Add Action'
//     },
//     {
//         id: 'FEE_REVERSAL',
//         displayText: 'Fee Reversal'
//     },
//     {
//         id: 'RETAI_OV_BOARDING',
//         displayText: 'Retail Onboarding'
//     },
//     {
//         id: 'Address Update',
//         displayText: 'Address Update'
//     }
// ];

const CardThree = props => {
    const {req} = props;
    return (
        <div>
            <div className="card-three-container">
                <div className="three-center-view">
                    <div>
                        <p className="card-three-favoite">Ask Catura</p>
                    </div>
                    <div className="three-center-view">
                        <div className="three-center-view">
                            <MdOutlineEmail />
                            <p>WhatsApp</p>
                            <MdArrowDropDown />
                        </div>
                        <div className="three-center-view">
                            <MdOutlineEmail />
                            <p>Email</p>
                            <MdArrowDropDown />
                        </div>
                    </div>
                </div>
                <div className="container-three-view">
                    <div className="container-three-view">
                        <p>Sunlight, journey, vibrant, peaceful, meadow, dreams, laughter, echoes, reflection, adventure, knowledge, breeze, twilight, melodies, vision, freedom, strength, innovation, curiosity, friendship, joy, ambition, tranquility, discovery, resilience, imagination, creativity, unity, passion, gratitude, whispers, serenity, growth, purpose, stars, wanderlust, determination, balance, memories, possibilities, horizon, inspiration, legacy, triumph, nature, simplicity, aspirations, hope, warmth, challenges, energy, culture, beauty, rhythm, diversity, perseverance, strength, heritage, comfort, determination, renewal, sunrise, connections, empathy, potential, brilliance, respect, transformation, marvel, sparkle, endeavor, understanding, dreams, synergy, marvel, fulfillment, clarity, pride, origin, wonder, trust, bloom, ambition, grace, radiance, and reflection.</p>
                    </div>
                    <div className="dim-overlay"></div>
                    <div className="three-greeting-container">
                        <div>
                            <h5 className="greeting">Greeting Template</h5>
                        </div>
                        <div>
                            <button type="button" className="button-icon">
                                <IoCopyOutline /> Copy to Send
                            </button>
                            <button type="button" className="button-icon">
                                <MdOutlineRemoveRedEye /> Preview
                            </button>
                        </div>
                    </div>
                </div>
                <div className="search-container">
                    <input type="search" placeholder="Type a message..." className="input-element" />
                    <BiSend className="image-card-three send-btn" />
                </div>
            </div>
            <div className="card-three-container">
                <div>
                    <p className="card-three-favoite">Action Launcher</p>
                </div>
                <div className="search-container">
                    <IoIosSearch className="image-card-three" />
                    <input type="search" placeholder="Search actions..." className="input-element" />
                </div>
                <div>
                    <button type="button" className="common-btn blue-btn"><CiCirclePlus className="three-plus-icon"/> Add Action</button>
                    <button type="button" className="common-btn transparent-btn">Fee Reversal</button>
                    <button type="button" className="common-btn transparent-btn">Retail Onboarding</button>
                    <button type="button" className="common-btn transparent-btn">Address Update</button>
                </div>
            </div>
            <div className="card-three-container">
                <div>
                    <p className="card-three-favoite"><PiPushPinThin className="card-three-pin"/> Case Favorite</p>
                </div>
                <hr />
                <div>
                    <p className="card-three-element-p">Lorem ipsum dolor sit amet consectetur. Et tincidunt </p>
                    <p className="card-three-element-p"><CiImageOn className="image-card-three"/> {req}</p>
                    <p className="card-three-element-p">Lorem ipsum dolor sit amet consectetur. Et tincidunt </p>
                </div>
            </div>
        </div>
    )
}

export default CardThree 