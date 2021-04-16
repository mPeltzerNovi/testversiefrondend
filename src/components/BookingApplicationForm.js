import React, { useState } from "react";
import "./BookingApplicationForm.css";
import axios from "axios";

function BookingApplicationForm() {



    const [arrival, setArrival] = useState("");
    const [departure, setDeparture] = useState("");
    const [comment, setComment] = useState("");
    //Voor baseImage
    const [baseImage, setBaseImage] = useState("");

    //state voor gebruikers-feedback
    const [createUserSuccess, setCreateUserSucces] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    //Voor baseImage :
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        event.preventDefault();

        console.log(baseImage);
        //
        const base64 = await convertBase64(baseImage);

        console.log("base 64", base64);

        console.log(arrival, departure, comment, baseImage);

        const token = localStorage.getItem('token');

        console.log("baseimage", baseImage);

        try {
            const response = await axios.post(`http://localhost:8080/bookings`, {
                arrival: arrival,
                departure: departure,
                comment: comment,
                baseImage: base64,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);

            if (response.status === 200) {
                setCreateUserSucces(true);
            }
        } catch (e) {
            console.error(e);

            if (e.message.includes('400')) {
                setError('Er bestaat al een account met deze gebruikersnaam');
            } else {
                setError('Er is iets misgegaan bij het zenden. Probeer het nog eens');
            }
        }
        toggleLoading(false);
    }

    const convertBase64 = (file) => {
        let reader = new FileReader();
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return (
        <>
            <h1>Bookingsverzoek</h1>

            <p>Geef de data waarop je het huisje wilt huren op en Judith laat je zsm weten of het kan!</p>
            <p>{createUserSuccess === true && (<h2 className="message-success">Succes; Je bookingsverzoek is verstuurd</h2>)}</p>


            <form className="bookingbutton" onSubmit={onSubmit}>

                <label htmlFor="arrival-field">
                    aankomstdatum:
                    <input
                        type="text"
                        id="arrival-field"
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                    />
                </label>

                <label htmlFor="departure-field">
                    vertrekdatum:
                    <input
                        type="text"
                        id="departure-field"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                    />
                </label>

                <label htmlFor="comment-field">
                    Welk huisje wil je boeken?:
                    <input
                        type="text"
                        id="comment-field"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}/>
                </label>

                <label htmlFor="base-image-field">
                    Upload hier je paspoortfoto:
                    <input
                        type="file"
                        id="base-image-field"

                        onChange={(e) => setBaseImage(e.target.files[0])}/>
                </label>
                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    {loading ? 'Bookingsverzoek ontvangen' : 'Versturen'}
                </button>
                {error && <p>{error}</p>}

                <img src={baseImage} height="200px"/>

            </form>
            <p>Laat ook een berichtje achter op de profielpagina!</p>

        </>
    )
};

export default BookingApplicationForm;
