import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

import { useHistory } from 'react-router-dom';

function StoryReel() {

    const history = useHistory();

    return (
        <div className="storyReel">

                <Story
                    image="https://www.wanderlustingk.com/wp-content/uploads/2017/11/belgium-208_orig.jpg"
                    title="Durbuy"
                />



                <Story
                    image="https://images.trvl-media.com/media/content/shared/images/travelguides/destination/2114/London-City-Hall-167154.jpg"
                    profileSrc="https://s1.thcdn.com/productimg/600/600/11319445-1134415917821882.jpg"
                    title="London"
                />



                <Story
                    image="https://www.planetware.com/photos-large/D/germany-garmisch-partenkirchen-grainau.jpg"

                    title="Garmisch"
                />



                <Story
                    image="https://i.pinimg.com/736x/9f/56/7d/9f567deb0d9a63c3f81aa43a0a99141d.jpg"

                    title="Deauville"
                />



                <Story
                    image="https://www.ohmyfoodness.nl/wp-content/uploads/2018/12/Hattem-1.jpg"

                    title="Hattem"
                />


        </div>
    )
};

export default StoryReel;