import React, { useState } from 'react';
import '../../styles/index.css';
import { useDispatch } from 'react-redux';
import { getEditForm, getAddEntries, getExtEntries } from '../../actions/operationsActions';
import { FiXCircle as Xbut } from "react-icons/fi";
const axios = require('axios');

export default function EditForm({id, reason, amount, date, categories}) {
    const defaultEntry = {reason, amount, date};
    const dispatch = useDispatch();
    const [entry, setEntry] = useState(defaultEntry);

    function handleChange(e) {
        e.preventDefault();
        
        setEntry((entry) => ({
            ...entry,
            [e.target.name]: e.target.value
        }));
    };

    async function updateEntry(entry) {
        await axios({
            method: 'put',
            url: `http://localhost:3001/entries/update/${id}`,
            data: entry
        });

        dispatch(getEditForm(null));
        dispatch(getAddEntries());
        dispatch(getExtEntries());
    };

    async function updateCategories(e) {
        e.preventDefault();

        await axios({
            method: 'delete',
            url: `http://localhost:3001/entries/update/categories/${id}`,
            data: {category: e.target.name}
        });

        window.alert(`${e.target.name} relation with entry: ${reason} deleted`);

        dispatch(getEditForm(null));
        dispatch(getAddEntries());
        dispatch(getExtEntries());
    };

    function cancelEdit(e) {
        e.preventDefault();
        
        dispatch(getEditForm(null));
    };

    return (
        <div className="glob-sel w-full h-96 bg-forest-300 shadow-2xl border-2 border-forest-200 flex flex-col justify-start items-start p-4 mb-10 overflow-y-scroll scrollbar scrollbar-thumb-pink-500 scrollbar-track-pink-900">
            <h3 className="glob-sel font-sub-title text-2xl text-pink-700 self-center">Edit Entry</h3>
            <form className="w-full h-full flex flex-col justify-start items-start" onSubmit={(e) => {
                e.preventDefault();

                setEntry((entry) => ({
                    ...entry,
                    date: new Date(entry.date)
                }));

                updateEntry(entry);
            }}>
                <button className="text-pink-500 hover:text-lightblue-300 self-end mr-10" onClick={(e) => cancelEdit(e)}><Xbut size="22" /></button>
                <div className="flex flex-col justify-start items-center my-3.5 w-full">
                    <h4 className="glob-sel text-lightblue-600 text-xl font-sub-title self-start mb-3">Reason:</h4>
                    <input className="font-normal text-grey-600 text-md my-1 focus:outline-none rounded glob-sel" name="reason" type="text" placeholder={entry.reason} value={entry.reason}
                    onChange={(e) => handleChange(e)} />
                </div>
                <div className="flex flex-col justify-start items-center my-3.5 w-full">
                    <h4 className="glob-sel text-lightblue-600 text-xl font-sub-title self-start mb-3">Amount:</h4>
                    <input className="font-normal text-grey-600 text-md my-1 focus:outline-none rounded glob-sel" name="amount" type="number" placeholder={entry.amount} value={entry.amount}
                    onChange={(e) => handleChange(e)} min="0" step="0.01" />
                </div>
                <div className="flex flex-col justify-start items-center my-3.5 w-full">
                    <h4 className="glob-sel text-lightblue-600 text-xl font-sub-title self-start mb-3">Date:</h4>
                    <input className="font-normal text-grey-600 text-md my-1 focus:outline-none rounded glob-sel" name="date" type="date" placeholder={entry.date} value={entry.date}
                    onChange={(e) => handleChange(e)} />
                </div>
                <div className="flex flex-col justify-start items-center my-3.5 w-full">
                    <h4 className="glob-sel text-lightblue-600 text-xl font-sub-title self-start mb-3">Categories:</h4>
                    <ul className="font-normal text-grey-600 text-md my-1 focus:outline-none rounded glob-sel">
                        {categories.map((name) => <li className="glob-sel">{name}  <button className="text-pink-500 hover:text-lightblue-300" type="button" name={name} onClick={(e) => updateCategories(e)}><Xbut size="14" /></button></li>)}
                    </ul>
                </div>
                <button className="bg-forest-700 px-4 py-2 mr-3 mb-3 rounded-lg font-normal text-aquamarine-50 shadow-2xl self-end hover:text-pink-600 focus:shadow-inner" type="submit">Confirm</button>
            </form>
        </div>
    )
};