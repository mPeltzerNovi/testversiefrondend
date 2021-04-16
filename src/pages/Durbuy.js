//import React from "react";

//Ad1
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Location from "../components/Location";
import BookingApplicationForm from "../components/BookingApplicationForm";

import Sidebar from "../components/Sidebar";

//ad2
const apiKey ='620c29ea8666e616e5cd46cb0d2acdf4';

function Durbuy(){

    //Ad3
    const [weatherDataDurbuyTemp, setWeatherDataDurbuyTemp] = useState([]);









    //Ad4
    //Durbuy temp
    useEffect(() => {
        async function getLocationsDurbuyTemp() {
            try {
                const {data: {main}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=durbuy,be&appid=${apiKey}&lang=nl`);

                setWeatherDataDurbuyTemp(main);

                console.log("hierzo", main);

            } catch (e) {
                console.log(e);
            }
        }

        getLocationsDurbuyTemp();

    }, []);

    //Dat omrekenen moet je zo kunnen copy pasten!!!




    return (
        <div className='feed'>
            <p><strong>Actuele luchtdruk ter plaatse:</strong> {weatherDataDurbuyTemp.pressure} Pa</p>

            <Sidebar />
            <Location
                locationName="Rue du Manoir 34: Durbuy"
                description="Boek nu dit leuke huisje in de bossen van Durbuy! Heerlijk voor een weekendje weg in de Ardennen.
                Je kan er heerlijk mountainbiken, wandelen, raften en in de winter langlaufen. Wil je hierheen? Scroll dan snel
                naar beneden en doe een boekingsverzoek met de datum die je in gedachten hebt. Dan laat ik je binnen 24 uur
                weten of het huisje vrij is! De kosten zijn 100 euro per nacht. "
                image1="https://images.micazu.nl/_images/house/27523/images/huisje_127_(sunclass_durbuy)-1-0312.jpg?crop=0,0,1024,769"
                image2="https://www.inrichting-huis.com/wp-content/afbeeldingen/la-micheline-stoer-architectonisch-vakantiehuis-ardennen.jpg"
                image3="https://cdn.thecrazytourist.com/wp-content/uploads/2020/02/ccimage-shutterstock_1408571276.jpg"
            />
            {/*Component boekingsverzoek maken en hier plaatsen*/}
            <BookingApplicationForm />


        </div>
    )
}

export default Durbuy;
