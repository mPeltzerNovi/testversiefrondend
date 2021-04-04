import React from "react";
import "./Location.css";


function Location ({ locationName, image1, image2, image3, description }) {
    return (
        <div className='location'>
            <div className="location_top">
                <h1>{locationName}</h1>
            </div>
            <div className="location_bottom">
                <p>{description}</p>
            </div>

            <div className="location_image">
                <img src={image1} alt=""/>
            </div>
            <div className="location_image">
                <img src={image2} alt=""/>
            </div>
            <div className="location_image">
                <img src={image3} alt=""/>
            </div>
        </div>
    )
};

export default Location;