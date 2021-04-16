import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import {AuthContext, useAuthState} from "../context/AuthContext";


function SignIn() {

    const { login } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/profile');
        }
    }, [isAuthenticated]);



    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8080/api/auth/signin`, {
                username: username,
                password: password,
            })
            login(response.data);
        } catch (e) {
            console.log(e);
            setError('Inloggen is mislukt');
        }
        toggleLoading(false);
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Log hier in om een huisje te boeken:</p>

            <form className="login" onSubmit={onSubmit}>
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
                        onChange={(e) => setPassword(e.target.value)} />
                </label>

                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Versturen'}
                </button>
                {error && <p>{error}</p>}
            </form>
            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;
