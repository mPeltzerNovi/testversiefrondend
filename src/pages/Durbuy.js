import React from "react";


import Location from "../Location";
import BookingApplicationForm from "../BookingApplicationForm";

function Durbuy(){





    return (
        <div className='feed'>
            <Location
                locationName="Durbuy"
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

export default Durbuy