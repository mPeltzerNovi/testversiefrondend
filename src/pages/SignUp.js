import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function SignUp() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [createUserSuccess, setCreateUserSucces] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        event.preventDefault();

        console.log(email, username, password);

        try {
            const response = await axios.post(`http://localhost:8080/api/auth/signup`, {

                username: username,
                email: email,
                password: password,
                role: ["user"],
            });

            console.log(response);


            if (response.status === 200) {
                setCreateUserSucces(true);
            }
        }catch (e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('Er bestaat al een account met deze gebruikersnaam');
            } else {
                setError('Er is iets misgegaan bij het verzenden. Probeer het opnieuw');
            }
        }
        toggleLoading(false);

    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Maak hier een account aan om een huisje te boeken:</p>
            {createUserSuccess === true && (
                <h2 className="message-success">Het is gelukt! Klik <Link to="/signin">hier</Link> om je in te loggen </h2>
            )}
            <form className="login" onSubmit={onSubmit}>
                <label htmlFor="email-field">
                    Email:
                    <input
                        type="email"
                        id="email-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Maak account aan'}
                </button>
                {error && <p>{error}</p>}
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;
