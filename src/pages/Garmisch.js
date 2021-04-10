//import React from "react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Location from "../Location";
import BookingApplicationForm from "../BookingApplicationForm";
import Sidebar from "../Sidebar";

const apiKey ='620c29ea8666e616e5cd46cb0d2acdf4';

function Garmisch(){
    const [weatherDataGarmischTemp, setWeatherDataGarmischTemp] = useState([]);

    //Garmisch temp
    useEffect(() =>{
        async function getLocationsGarmischTemp(){
            try {
                const {data: {main}} =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=garmisch-partenkirchen,de&appid=${apiKey}&lang=nl`);
                setWeatherDataGarmischTemp(main);
                console.log("hierzo Garmisch", main);
            } catch (e) {
                console.log(e);
            }
        }
        getLocationsGarmischTemp();
    },[]);

    return (
        <div className='feed'>
            <p><strong>Actuele luchtdruk ter plaatse:</strong> {weatherDataGarmischTemp.pressure} Pa</p>
            <Sidebar />
            <Location
                locationName="Garmisch"
                description="Hier kan je fantastisch skien en het is niet ver weg! Dit leuke stadje in Zuid-Duitslang is
                ontzettend Chill. Niet alleen in de winter maar ook in de Zomer. Lekker wandelen in de bergen of een
                dagtochtje naar het waanzinnige Munchen. Het appartement is gelegen op 800 meter van de gondel en honden zijn
                er toegestaan. De kosten zijn 150 euro per nacht. Zit jij volgende week aan het bier in Garmisch?"
                image1="https://holidaystoeurope.com.au/wp-content/uploads/2011/01/Garmisch-Partenkirchen_Ludwigstrasse.jpg"
                image2="https://media-cdn.holidaycheck.com/w_1280,h_720,c_fit,q_80/ugc/images/5c87d934-9ff7-355f-9b85-27d94f1c2ffd"
                image3="https://www.mountvacationmedia.com/a/16604/w/19/o"
            />
            <BookingApplicationForm />
        </div>
    )
}

export default Garmisch
