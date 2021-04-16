import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import {DirectionsWalk} from "@material-ui/icons";
import {DirectionsBike} from "@material-ui/icons";
import {LocationCity} from "@material-ui/icons";
import {FilterHdr} from "@material-ui/icons";
import {LocalDining} from "@material-ui/icons";

import { useHistory } from 'react-router-dom';

function Sidebar() {

    const history = useHistory();

    return (
        <div className="sidebar">
            <button type="sidebar_button" onClick={() => history.push('/profile')}>
                <SidebarRow Icon={HomeIcon} title="Home" />
            </button>

            <button type="sidebar_button" onClick={() => history.push('/Durbuy')}>
                <SidebarRow Icon={DirectionsBike} title="Durbuy" />
            </button>

            <button type="sidebar_button" onClick={() => history.push('/London')}>
                <SidebarRow Icon={LocationCity} title="London" />
            </button>

            <button type="sidebar_button" onClick={() => history.push('/Garmisch')}>
                <SidebarRow Icon={FilterHdr} title="Garmisch" />
            </button>

            <button type="sidebar_button" onClick={() => history.push('/Deauville')}>
                <SidebarRow Icon={LocalDining} title="Deauville" />
            </button>

            <button type="sidebar_button" onClick={() => history.push('/Hattem')}>
                <SidebarRow Icon={DirectionsWalk} title="Hattem" />
            </button>

        </div>
    );

}

export default Sidebar;
