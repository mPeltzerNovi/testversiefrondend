import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {AuthContext, useAuthState} from "../context/AuthContext";
import axios from "axios";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import {DirectionsWalk} from "@material-ui/icons";
import {DirectionsBike} from "@material-ui/icons";
import {LocationCity} from "@material-ui/icons";
import {FilterHdr} from "@material-ui/icons";
import {LocalDining} from "@material-ui/icons";


import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar } from "@material-ui/core";





function Header() {
    const history = useHistory();
    const { user } = useAuthState(); //Nice; dit in combi met {user.username} op R74 geeft username in de header

    //context dingen

    const { isAuthenticated } = useAuthState();
    const { logout } = useContext(AuthContext);

    //Aanvullingen voor het uploaden van een profielfoto
    //--------------------------------------------------------
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [clientText, setClientText] = useState("");
    const [avatarImage, setAvatarImage] = useState("");

    //state voor gebruikers-feedback
    const [createUserSucces, setCreateUserSucces] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    //avatarImage omzetten in base64
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setAvatarImage(base64);
    }

    //Zoiets moet ik dan ook maken voor terug renderen.
    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        event.preventDefault();

        console.log(avatarImage);

        const base64 = await convertBase64(avatarImage);

        console.log("base 64", base64);

        console.log(firstName, lastName, clientText, avatarImage);


        const token = localStorage.getItem('token');

        console.log("avatarImage", avatarImage);

        try {
            const response = await axios.post(`http://localhost:8080/residences`, {
                firstName: firstName,
                lastName: lastName,
                clientText: clientText,
                avatarImage: base64,
            }, {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);

            if (response.status === 200) {
                setCreateUserSucces(true);
            }
        } catch (e) {
            console.log(e);

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



    //useEffect(() => {
    //  if (isAuthenticated === false) {
    //    history.push('/signin');
    //  }
    //}, [isAuthenticated]);

    //Het zat in de label-->id

    return (
        <>



            <header>
                <div className="header_left">
                    {/*<img src="https://upload.wikimedia.org/wikipedia/en/8/8c/Facebook_Home_logo_old.svg" alt=""/>*/}
                    {createUserSucces === true}
                    <form className="avatarButton" onSubmit={onSubmit}>
                        {error && <p>{error}</p>}
                        <label htmlFor="avatarImage-field">
                            Upload hier je avatar
                            <input
                                type="file"
                                id="avatarImage-field"

                                onChange={(e) => setAvatarImage(e.target.files[0])}
                            />
                        </label>
                        <button
                            type="submit"
                            className="avatar-button"
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Versturen'}
                        </button>
                        {error && <p>{error}</p>}
                    </form>
                </div>



                <div className="header_center">

                </div>

                <div className="header-right">




                    {/*<Button>
                        Hallo daar!
                    </Button>*/}


                    {isAuthenticated ? (
                        <>
                            <div className="header_info">
                                <Avatar />
                                <h4>{user.username}</h4>
                                <button
                                    type="button"
                                    onClick={() => logout()}
                                >
                                    Inloggen/Uitloggen
                                </button>
                            </div>
                        </>

                    ) : (
                        <>
                            {/*Oplossen door enr een loguitknop bij te maken*/}
                            <button
                                type="button"
                                onClick={() => history.push('/signin')}
                            >
                                Inloggen/Uitloggen
                            </button>
                            <button
                                type="button"
                                onClick={() => history.push('/signup')}
                            >
                                Registreren
                            </button>


                        </>
                    )}
                </div>



            </header>
        </>
    );
};

export default Header;