import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Location from "../Location";
import BookingApplicationForm from "../BookingApplicationForm";
import Sidebar from "../Sidebar";

const apiKey ='620c29ea8666e616e5cd46cb0d2acdf4';

function Deauville() {
    const [weatherDataDeauvilleTemp, setWeatherDataDeauvilleTemp] = useState([]);

    //Deauville temp
    useEffect(() =>{
        async function getLocationsDeauvilleTemp() {
            try {
                const {data: {main}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=deauville,fr&appid=${apiKey}&lang=nl`);
                setWeatherDataDeauvilleTemp(main);
                console.log("hierzo Deauville", main);
            } catch (e) {
                console.log(e);
            }
        }
        getLocationsDeauvilleTemp();
    },[]);


    return(
        <div className='feed'>
            <p><strong>Actuele luchtdruk ter plaatse:</strong> {weatherDataDeauvilleTemp.pressure} Pa</p>
            <Sidebar />
            <Location
                locationName="Deauville"
                description="In Deauville ben je lekker even helemaal weg. Of je nu door het oude centrum banjert of door
                de heuvels van Normandie rijdt. Je bent lekker aan de kust en de visschotels zijn er geweldig! Boek dit
                leuke appartement (30M2) aan de rand van Deauville, inde buurt van de jachthaven voor maar 120 euro per
                nacht! Honden zijn er toegestaan en er staat een heerlijke fles wijn voor je klaar"
                image1="https://odis.homeaway.com/odis/destination/73587fe4-3008-4c49-9fda-f47f2272a5c9.hw1.jpg"
                image2="https://odis.homeaway.com/odis/listing/5826a5f2-d7bb-4a0a-92e0-d04643f9928c.c10.jpg"
                image3="https://images1.apartments.com/i2/61E14xOWD_pJhLVatAUL5PbORLY19nuLuni1UtRo6-s/117/deauville-prairie-village-ks-building-photo.jpg"
            />
            <BookingApplicationForm />


        </div>
    )
}

export default Deauville;
