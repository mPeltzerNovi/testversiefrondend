import React, { useState, useContext, useEffect } from "react";
import "./BookingApplicationForm.css";
import {AuthContext, useAuthState} from "./context/AuthContext";
import { Link, useHistory } from 'react-router-dom';


import axios from "axios";



function BookingApplicationForm() {

    //Toevoeging 1
    //const { isAuthenticated } = useState();

    const [arrival, setArrival] = useState("");
    const [departure, setDeparture] = useState("");
    const [comment, setComment] = useState("");
    //Ad1 voor baseImage (26feb 21)
    const [baseImage, setBaseImage] = useState("");

    //state voor gebruikers-feedback
    const [createUserSuccess, setCreateUserSucces] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    //Ad2 voor baseImage:
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    /*const convertBase64 = (file) => {

        return new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = (() => {
                resolve(fileReader.result);
            });

            fileReader.onerror = ((error) => {
                reject(error);
            });
        });
    };*/

    //einde input voor image 26feb 21


    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        event.preventDefault();

        console.log(baseImage);
        //
        const base64 = await convertBase64(baseImage);

        console.log("base 64", base64);

        console.log(arrival, departure, comment, baseImage);

        //Dit is nieuw 1:
        const token = localStorage.getItem('token');

        console.log("baseimage", baseImage);

        try {
            const response = await axios.post(`http://localhost:8080/bookings`, {
                //Dit is nieuw 2:
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

    /*const handleSubmit = e => {
        e.preventDefault();

        //More clever database stuff

        setStartDate("");
        setEndDate("");
        setComment("");
    }*/


    return (
        <>
            <h1>Bookingsverzoek</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
            {createUserSuccess === true}
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
                    Upload foto:
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
                    {loading ? 'Loading...' : 'Maak account aan'}
                </button>
                {error && <p>{error}</p>}

                <img src={baseImage} height="200px"/>

            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    )
};

export default BookingApplicationForm;