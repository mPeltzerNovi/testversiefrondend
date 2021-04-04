import React from 'react';
import "./SidebarRow.css";
import {Avatar} from "@material-ui/core";

//src is voor de foto, Icon is voor de icoontjes
//Voor de destructureing: "function SidebarRow(props) {" en "<p>{props.title}<p>"
function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {/* Hieronder: "if there is a source dan krijgt de avatar die source"*/}
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            {/*if you pass on an icon, only than are we going to render the icon*/}
            {/*this icon is not imported it is passed on as a prop, kan door hoofdlettergebruik (zie R7)*/}
            <h4>{title}</h4>
        </div>
    );
}

export default SidebarRow;