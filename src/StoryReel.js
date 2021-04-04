import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

import { useHistory } from 'react-router-dom';

function StoryReel() {

    const history = useHistory();

    return (
        <div className="storyReel">
            <button type="storyReel_button" onClick={() => history.push('/Durbuy')}>
                <Story
                    image="https://www.wanderlustingk.com/wp-content/uploads/2017/11/belgium-208_orig.jpg"
                    profileSrc="https://df0a04043ae3b0be60ce-0769ebb99367e103e6cc409064fb3339.ssl.cf2.rackcdn.com/0ca859f6-8fa4-482e-b70c-abfdbc49cf54__L.jpg"
                    title="Durbuy"
                />
            </button>

            <button type="storyReel_button" onClick={() => history.push('/London')}>
                <Story
                    image="https://images.trvl-media.com/media/content/shared/images/travelguides/destination/2114/London-City-Hall-167154.jpg"
                    profileSrc="https://s1.thcdn.com/productimg/600/600/11319445-1134415917821882.jpg"
                    title="London"
                />
            </button>

            <button type="storyReel_button" onClick={() => history.push('/Garmisch')}>
                <Story
                    image="https://www.planetware.com/photos-large/D/germany-garmisch-partenkirchen-grainau.jpg"
                    profileSrc="https://getthelabel.btxmedia.com/pws/client/images/catalogue/products/dq2617/zoom/dq2617_red_1.jpg"
                    title="Garmisch"
                />
            </button>

            <button type="storyReel_button" onClick={() => history.push('/Deauville')}>
                <Story
                    image="https://i.pinimg.com/736x/9f/56/7d/9f567deb0d9a63c3f81aa43a0a99141d.jpg"
                    profileSrc="https://www.bike24.com/i/p/5/7/334075_02_d.jpg"
                    title="Deauville"
                />
            </button>

            <button type="storyReel_buttom" onClick={() => history.push('/Hattem')}>
                <Story
                    image="https://www.ohmyfoodness.nl/wp-content/uploads/2018/12/Hattem-1.jpg"
                    profileSrc="https://www.prodirectrunning.com/ProductImages/Main/216470_Main_Thumb_0647241.jpg"
                    title="Hattem"
                />
            </button>

        </div>
    )
};

export default StoryReel;