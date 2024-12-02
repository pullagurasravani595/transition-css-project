import { CiLocationOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { PiChartPieSliceFill } from "react-icons/pi";
import { LuUserPlus2 } from "react-icons/lu";

import './index.css'

const CardOne = () => (
    <div className='card-one-container'>
        <div className="horizontal">
            <div className="round-container">
                <p className="card-one-cb">CB</p>
            </div>
            <div>
                <h5 className="hannibal">Hannibal Smith</h5>
                <div className="horizontal">
                    <CiLocationOn />
                    <p className="paragraph-val">1 Market Street San Francisco, CA 94105</p>
                </div>
            </div>
        </div>
        <div className="customer-container padding-container">
            <div className="horizontal border-container">
                <div>
                    <p>Customer ID</p>
                </div>
                <div className="horizontal">
                    <p>12345</p>
                    <BsThreeDotsVertical />
                </div>
            </div> 
            <div className="horizontal border-container">
                <div>
                    <p>Email Address</p>
                </div>
                <div className="horizontal">
                    <p>rachel@sample.com</p>
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div className="horizontal">
                <div>
                    <p>Phone Number</p>
                </div>
                <div className="horizontal">
                    <p>8051298905</p>
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div>
                <button type="button" className="add-btn">
                    <CiCirclePlus /> Add
                </button>
            </div>
        </div>
        <div className="customer-container padding-container">
            <div className="horizontal border-container">
                <div>
                    <p>Loyalty Tier</p>
                </div>
                <div className="horizontal">
                    <p>Silver</p>
                    <BsThreeDotsVertical />
                </div>
            </div> 
            <div className="horizontal border-container">
                <div>
                    <p>Segment</p>
                </div>
                <div className="horizontal">
                    <p>Sleepy Customer</p>
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div>
                <button type="button" className="add-btn">
                    <CiCirclePlus /> Add
                </button>
            </div>
        </div>
        <div className="customer-container padding-container">
            <div className="horizontal border-container">
                <div>
                    <p>Lifetime Value</p>
                </div>
                <div className="horizontal">
                    <p>$ 1M</p>
                    <BsThreeDotsVertical />
                </div>
            </div> 
            <div className="horizontal border-container">
                <div>
                    <p>Propensity to Purchase</p>
                </div>
                <div className="horizontal">
                    <PiChartPieSliceFill className="card-one-icon"/>
                    75%
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div>
                <button type="button" className="add-btn">
                    <CiCirclePlus /> Add
                </button>
            </div>
        </div>
        <div className="customer-container padding-container">
            <div className="horizontal border-container">
                <div>
                    <p>Engagement Score</p>
                </div>
                <div className="horizontal">
                    <PiChartPieSliceFill className="card-one-icon-two"/>
                    80%
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div>
                <button type="button" className="add-btn">
                    <CiCirclePlus /> Add
                </button>
            </div>
        </div>
        <div>
            <button type="button" className="agent-btn"><LuUserPlus2 /> Assign other Agent</button>
            <button type="button" className="agent-btn card-one-dot-btn">Add New Widget</button>
        </div>
    </div>
)

export default CardOne 