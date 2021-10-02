import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
const balanceActions = require('../actions/getBalance');

export default function Home() {
    // const [balance, setBalance] = useState({
    //     totalAditions: 0,
    //     totalExtractions: 0,
    //     balance: 0
    // });

    const dispatch = useDispatch();

    let balance = useSelector((state) => state.balance)

    useEffect(() => {
        dispatch(balanceActions.getBalance())
    }, [dispatch]);

    return (
        <div>
            {console.log(balance)}
            <h1>My Personal Finances App</h1>
            <div>
                <h2>Current Balance</h2>
                <p>${balance}</p>
            </div>
            <div>
                <h2>Last Entries</h2>
                <p>Empty. .  .</p>
            </div>
        </div>
    )
}