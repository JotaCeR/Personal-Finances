import React, { useState, useEffect } from 'react';
const axios = require('axios');

export default function Home() {
    const [balance, setBalance] = useState({
        adition: 0,
        extraction: 0
    });

    // async function getBalance () {
    //     await axios.get()
    // }

    // useEffect(() => {
    //     const balance = getBalance();
    //     setBalance({...balance})
    // });

    return (
        <div>
            <h1>My Personal Finances App</h1>
            <div>
                <h2>Current Balance</h2>
                <p>0</p>
            </div>
            <div>
                <h2>Last Entries</h2>
                <p>Empty. .  .</p>
            </div>
        </div>
    )
}