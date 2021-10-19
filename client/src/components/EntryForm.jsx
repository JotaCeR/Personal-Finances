import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAddEntries, getExtEntries } from '../actions/operationsActions';
const axios = require('axios');

export default function EntryForm() {
    const [entry, setEntry] = useState({
        reason: null,
        amount: 0,
        date: null,
        type: null
    });

    const [errors, setErrors] = useState({
        amount: "Please especify a positive amount for the entry.",
        type: "Please, choose if the entry is a substraction or adition."
    });

    const dispatch = useDispatch();
    const typeVal = null;
    
    function validateEntry (entry) {
        let errors = {};

        if (entry.amount <= 0) {
                errors.amount = "Please especify a positive amount for the entry."
        };
        if (entry.type === null || entry.type === "") {
                errors.type = "Please, choose if the entry is a substraction or adition."
        };

        return errors;
    };

    function handleChange (e) {
        e.preventDefault();

        setErrors(validateEntry({...entry, [e.target.name]: e.target.value}));

        setEntry((entry) => ({
            ...entry,
            [e.target.name]: e.target.value
        }));
    };

    async function addEntry (entry) {
        await axios({
            method: 'post',
            url: 'http://localhost:3001/entries/new',
            data: entry
        });

        dispatch(getAddEntries());
        dispatch(getExtEntries());

        setEntry((entry) => ({
            ...entry,
            reason: null,
            amount: 0,
            date: null,
            type: null
        }));
    };

    function validateButton(errors) {
        const validation = Object.keys(errors);

        if (validation.length > 0) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
                <h3>New Entry</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    
                    if (entry.date !== null) {
                        setEntry((entry) => ({
                            ...entry,
                            date: new Date(entry.date)
                        }));
                    }

                    addEntry(entry);
                }}>
                    <div>
                        <h4>Operation:</h4>
                        <input name="reason" type="text" placeholder="Reason..." value={entry.reason} onChange={(e) => handleChange(e)} />
                        <input name="amount" type="number" min="0" step="0.01" placeholder="Amount..." value={entry.amount} onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <h4>Operation Date:</h4>
                        <input name="date" type="date" value={entry.date} onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <h4>Operation Type:</h4>
                        <select name="type" value={entry.type} onChange={(e) => handleChange(e)} >
                            <option value={typeVal}></option>
                            <option value="adition">Adition</option>
                            <option value="extraction">Extraction</option>
                        </select>
                    </div>
                    {validateButton(errors) ? <button type="submit" disabled>Add</button> : <button type="submit">Add</button>}
                </form>
            </div>
    )
}