import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {AuthContext, useAuthState} from "../context/AuthContext";
import axios from "axios";
import { Avatar } from "@material-ui/core";


function Header() {
    const history = useHistory();
    const { user } = useAuthState();

    const { isAuthenticated } = useAuthState();
    const { logout } = useContext(AuthContext);

    const [futureOne, setFutureOne] = useState("");
    const [lastName, setLastName] = useState("");
    const [futureTwo, setFutureTwo] = useState("");
    const [avatarImage, setAvatarImage] = useState("");

    //state voor gebruikers-feedback
    const [createUserSucces, setCreateUserSucces] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    const [base64Avatar, setBase64Avatar] = useState('');

    //avatarImage omzetten in base64
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setAvatarImage(base64);
    }

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        event.preventDefault();

        console.log(avatarImage);

        const base64 = await convertBase64(avatarImage);

        console.log("base 64", base64);

        console.log(futureOne, lastName, futureTwo, avatarImage);


        const token = localStorage.getItem('token');

        console.log("avatarImage", avatarImage);
        setBase64Avatar(base64);

        try {
            const response = await axios.post(`http://localhost:8080/avatars`, {
                futureOne: futureOne,
                lastName: lastName,
                futureTwo: futureTwo,
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
    console.log("hier het plaatje", base64Avatar);

    useEffect(() =>{
        const token = localStorage.getItem('token');
        async function getAvatar() {
            //Hier veranderd naar "avatars"
            const response = await axios.get(`http://localhost:8080/avatars`, { headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`,
                }})
            console.log(response);
        }
        getAvatar()
    }, [])

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



            <header>
                <div className="header_left">
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
                    {/*Voor latere functie-uitbreidingen */}
                </div>

                <div className="header-right">
                    {isAuthenticated ? (
                        <>
                            <div className="header_info">
                                {base64Avatar? <img src={base64Avatar} />: <Avatar />}

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
