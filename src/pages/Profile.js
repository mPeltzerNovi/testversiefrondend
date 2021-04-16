import React, { useEffect, useState} from 'react';
import {useAuthState} from "../context/AuthContext";
import axios from "axios";

function Profile() {

    const { user } = useAuthState();

    const [error, setError] = useState('');
    const [protectedData, setProtectedData] = useState('');
    const [protectedUserList, setProtectedUserList] = useState([]);
    const [protectedAdminData, setProtectedAdminData] = useState('');
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

                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/test/user', {

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setProtectedData(response.data);
            } catch (e) {
                setError('Er is iets misgegaan bij het ophalen van de data')
            }
        }
        getProtectedData();
    }, []);


    useEffect(() => {
        async function getProtectedAdminData() {
            setError('');
            try {
                const token = localStorage.getItem('token');
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


    useEffect(() => {
        async function getProtectedUserList() {
            setError('');
            try {
                const token = localStorage.getItem('token');
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
                <h1>Lijst van alle geregistreerde gebruikers:</h1>
                {protectedUserList.map((user) => {
                    return (
                        <p>{user.username}</p>
                    )
                })}
            </div>
        </>
    );
};

export default Profile;
