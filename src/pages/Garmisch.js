import React from "react";

import Location from "../Location";
import BookingApplicationForm from "../BookingApplicationForm";

function Garmisch(){


    return (
        <div className='feed'>
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