import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, getLastEntries } from '../actions/homeActions';
import HomeItem from './HomeItem';
import NavBar from './NavBar';

export default function Home() {
    const dispatch = useDispatch();

    let balance = useSelector((state) => state.balance.balance)
    let entries = useSelector((state) => state.lastEntries.entries);

    useEffect(() => {
        dispatch(getBalance());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getLastEntries());
    }, [dispatch]);

    useEffect(() => {}, [balance]);
    useEffect(() => {}, [entries]);

    return (
        <div>
            <h1>My Personal Finances App</h1>
            <NavBar />
            <div>
                <h2>Current Balance</h2>
                <p>{balance}</p>
            </div>
            <div>
                <h2>Last Entries</h2>
                <ul>
                    {Array.isArray(entries) ? entries.map((entry) => {return <HomeItem key={entry.id} id={entry.id} reason={entry.reason} amount={entry.amount} date={entry.date} type={entry.type} categories={entry.categories} />}) : <li>{entries}</li>}
                </ul>
            </div>
        </div>
    )
}