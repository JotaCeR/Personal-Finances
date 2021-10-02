import React, { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
const balanceActions = require('../actions/homeActions');

export default function Home() {
    const dispatch = useDispatch();

    let balance = useSelector((state) => state.balance.balance)
    let entries = useSelector((state) => state.lastEntries.entries);

    useEffect(() => {
        dispatch(balanceActions.getBalance());
        // dispatch(balanceActions.getLastEntries());
    }, [dispatch]);

    useEffect(() => {
        dispatch(balanceActions.getLastEntries());
    }, [dispatch]);

    return (
        <div>
            {console.log(balance)}
            <h1>My Personal Finances App</h1>
            <div>
                <h2>Current Balance</h2>
                <p>{balance}</p>
            </div>
            <div>
                <h2>Last Entries</h2>
                <ul>
                    {entries ? entries.map((entry) => {return <li>Reason: {entry.reason}, Amount:{entry.amount}, Date: {entry.date}, Type: {entry.type}</li>}) : <li>No entries found...</li>}
                </ul>
            </div>
        </div>
    )
}