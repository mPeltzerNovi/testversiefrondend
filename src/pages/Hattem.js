import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Location from "../components/Location";
import BookingApplicationForm from "../components/BookingApplicationForm";
import Sidebar from "../components/Sidebar";

;


const apiKey ='620c29ea8666e616e5cd46cb0d2acdf4';

function Hattem() {
    const [weatherDataHattemTemp, setWeatherDataHattemTemp] = useState([]);

    useEffect(() => {
        async function getLocationsHattemTemp() {
            try {
                const {data: {main}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=hattem,nl&appid=${apiKey}&lang=nl`);
                setWeatherDataHattemTemp(main);
                console.log("hierzo Hattem", main);
            } catch (e) {
                console.log(e);
            }
        }
        getLocationsHattemTemp();
    },[]);



    return (
        <div className='feed'>
            <p><strong>Actuele luchtdruk ter plaatse:</strong> {weatherDataHattemTemp.pressure} Pa</p>
            <Sidebar />
            <Location
                locationName="Vierakker 38: Hattem"
                description="Hattem is super leuk en altijd dichtbij! Je kunt er heerlijk over de Veluwe dwalen of lekker
                een terrasje pakken in het historische centrum. Het huisje is in de bossen gelegen en in de buurt van de
                uitvalswegen. Het oppervlak is 20M2, honden zijn toegestaan en de prijs is 110 euro per nacht.
                Geniet jij binnenkort ook van al dat moois gewoon in ons eigen Nederland?"
                image1="https://nieuwetijdsmakelaar.nl/wp-content/upload_folders/nieuwetijdsmakelaar.nl/Beste-makelaar-Hattem-800x600.jpg?v=1549220725931"
                image2="https://www.eenhuisjehuren.nl/uploads/93/0/vakantiehuis-in-het-gaasterlandse-bos-bij-oudemirdum_33786.jpg?width=767&height=500&fit=crop"
                image3="https://i.pinimg.com/originals/59/b7/51/59b7515efeed33f43281a7e330ae2716.jpg"
            />
            <BookingApplicationForm />
        </div>
    );
}

export default Hattem;
