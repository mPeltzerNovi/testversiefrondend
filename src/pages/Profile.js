import React, {useContext, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuthState} from "../context/AuthContext";
import axios from "axios";




function Profile() {
    const { user } = useAuthState();


    //const { Sidebar } = useState(); //Dit heb ik er ook achter gezet
    //const { admin } = useState();

    //Wil je beschermde data u()itlezen? stap 4 in de backend handleiding op film 02:28:30/ ->Stap 8 Nova
    //Dan zet je hier weer een useEffect met lege [] dependency array
    //asynchrome functie met try/catch
    //maar in het request stuur je de token die in de local storage staat, mee

    //-->Uitwerking

    //State voor de data-status
    const [error, setError] = useState('');
    const [protectedData, setProtectedData] = useState('');

    //Stap 1 state aanmaken voor admin view login (27feb)
    //const [protectedAdminData, setProtectedAdminData] = useState('');-->Tweede functie stoort de derde functie; uitgezet
    //voor derde functie
    const [protectedUserList, setProtectedUserList] = useState([]);
    //-->Test met extra admin functie 1maart
    const [protectedAdminData, setProtectedAdminData] = useState('');

    //-->Test useState voor comment uit booking halen en dat is een array
    const [protectedBookingList, setProtectedBookingList] = useState([]);

    useEffect(() => {
        async function getProtectedBookingList() {
            setError('');
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/bookings',  {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log("booking", response);
                setProtectedBookingList(JSON.parse(response.data));
            } catch (e) {
                setError('Er is iets mis gegaan met het ophalen van de data')
            }
        }

        if (user.roles && user.roles.includes("ROLE_ADMIN")) getProtectedBookingList();
    }, []);






    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {
                //haal de token op uit de local storage
                const token = localStorage.getItem('token');

                //haal de protected data op met de token meegestuurd
                //Het ging fout met de url uit Nova's uitwerking: 'http://localhost:8080/api/test/user'
                //Het moet zijn:

                //const response = await axios.get('https://polar-lake-14365.herokuapp.com/api/test/user', {
                //const response = await axios.get('http://localhost:8080/api/test/admin', {
                //const response = await axios.get('http://localhost:8080/api/admin/all', {
                const response = await axios.get('http://localhost:8080/api/test/user', {

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });

                //zet deze data in de state zodat we dit in het component kunnen laten zien
                setProtectedData(response.data);
            } catch (e) {
                setError('Er is iets misgegaan bij het ophalen van de data')
            }
        }

        getProtectedData();
    }, []);

    //Stap 2: nieuwe useEffect functie maken voor aanmaken admin view login (27feb)
    //-->Uitgezet. Deze functie stoort de derde functie en de derde functie is wat ik wil
    //Het is de een of de ander gebruiken.
    useEffect(() => {
        async function getProtectedAdminData() {
            setError('');
            try {
                const token = localStorage.getItem('token');
                //const response = await axios.get('http://localhost:8080/api/admin/all', {
                const response = await axios.get('http://localhost:8080/api/test/admin', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setProtectedAdminData(response.data);
            } catch (e) {
                setError('Er is iets mis gegaan met het ophalen van de data')
            }
        }

        if (user.roles && user.roles.includes("ROLE_ADMIN")) getProtectedAdminData();
    }, []);

    //Einde stap 2 (27feb).
    //Stap 3 op 28 feb -->Get all list derde functie toevoegen
    useEffect(() => {
        async function getProtectedUserList() {
            setError('');
            try {
                const token = localStorage.getItem('token');
                //const response = await axios.get('http://localhost:8080/api/admin/all', {
                //const response = await axios.get('http://localhost:8080/api/test/admin', {
                const response = await axios.get('http://localhost:8080/api/admin/all',  {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setProtectedUserList(response.data);
            } catch (e) {
                setError('Er is iets mis gegaan met het ophalen van de data')
            }
        }

        if (user.roles && user.roles.includes("ROLE_ADMIN")) getProtectedUserList();
    }, []);

    console.log(protectedBookingList);



    return (
        <>
            <div>
                {/*<Sidebar />  die kwam hier dus niet!!!! Maar in App.js*/}




                <h1>Hieronder volgt de lijst van gebruikers!!!</h1>

                {protectedUserList.map((user) => {
                    return (
                        <p>{user.username}</p>
                    )
                })}


                ---------------------------------------------------------Overige info hieronder:

                {protectedBookingList.map((booking) => {
                    return (
                        <p>{booking.comment}</p>
                    )
                })}






                {protectedData && <p>{protectedData}</p>}
                {protectedAdminData && <p>{protectedAdminData}</p>}
                {error && <p className="message-error">{error}</p>}
                <p>Terug naar de <Link to="/">Homepagina</Link></p>

                <h1>Profielpagina</h1>
                <h2>Gegevens</h2>
                { user && (
                    <>
                        <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        {/*<p><strong>All</strong> {admin.all}</p>*/}
                    </>
                )}

                <h2>Afgeschermde content voor ingelogde gebruikers</h2>

            </div>

        </>
    );
};

export default Profile;