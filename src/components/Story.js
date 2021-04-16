import React from 'react';
import "./Story.css";
import {Avatar} from "@material-ui/core";

//profileSrc kan je er uitlaten straks dat wil ik er niet in hebben
function Story({image, title}) {
    return (
        <div style={{ backgroundImage: `url(${image})`}}
             className="story">

            <h4>{title}</h4>
        </div>
    )
}

export default Story;
