import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, getLastEntries } from '../../actions/homeActions';
import HomeItem from './HomeItem';
import NavBar from '../NavBar';

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
        <div className="flex flex-col justify-start items-center w-full">
            <div className="bg-gradient-to-br from-lightblue-400 to-green-600 w-9/12 h-40 flex flex-col justify-around items-center shadow-2xl rounded-2xl my-6">
                <h1 className="font-title text-7xl tracking-wide text-aquamarine-800">My Personal Finances App</h1>
                <NavBar />
            </div>
            <div className="flex flex-row w-9/12 justify-between items-start">
                <div className="bg-forest-300 w-96 h-36 rounded-lg shadow-2xl flex flex-col justify-evenly items-center border-2 border-forest-200">
                    <h2 className="font-sub-title text-2xl text-pink-700" >Current Balance</h2>
                    <p className="font-normal text-5xl text-lightblue-600">{Math.round((balance + Number.EPSILON) * 100) / 100}</p>
                </div>
                <div className="bg-forest-300 w-3/5 h-36 rounded-lg shadow-2xl flex flex-col justify-evenly items-center border-2 border-forest-200 p-4">
                    <h2 className="font-sub-title text-2xl text-pink-700">Last Entries</h2>
                    <ul>
                        {Array.isArray(entries) ? entries.map((entry) => {return <HomeItem key={entry.id} id={entry.id} reason={entry.reason} amount={entry.amount} date={entry.date} type={entry.type} categories={entry.categories} />}) : <li className="font-normal text-xl font-semibold leading-5 text-lightblue-600">{entries}</li>}
                    </ul>
                </div>
            </div>
        </div>
    )
}