import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
            <h1>Homepagina</h1>
            <p>Welkom op Judith's huisjes-site</p>
            <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
            <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen account hebt.</p>
        </>
    );
}

export default Home;
