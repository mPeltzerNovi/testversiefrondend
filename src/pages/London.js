import React from "react";

import Location from "../Location"
import BookingApplicationForm from "../BookingApplicationForm";

function London() {


    return (
        <div className='feed'>
            <Location
                locationName="London"
                description="London is the place to be om te shoppen maar ook zijn er ontelbaar veel leuke dingen te doen!
                Het appartement is niet groot (20m2) en honden zijn er helaas niet toegestaan. Het is gelegen nabij
                Greenwich Park en het metrostation aldaar. Je bent dus overal in London in een handomdraai! Ideaal voor een
                weekendje weg in een Wereldstad. Boek snel dit appartement voor 200 euro per nacht!"
                image1="https://cdn.thecrazytourist.com/wp-content/uploads/2018/07/ccimage-shutterstock_721255741.jpg"
                image2="https://i.dmarge.com/2016/03/004-london-loft-apartment-sigmar-1050x700.jpg"
                image3="https://st.hzcdn.com/simgs/pictures/bedrooms/contemporary-apartment-camden-paul-warren-design-img~c3c1697507b9f00d_9-6447-1-e393a79.jpg"
            />
            <BookingApplicationForm />

        </div>
    )


}

export default London;