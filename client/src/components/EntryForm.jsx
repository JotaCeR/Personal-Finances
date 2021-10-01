import React, { useState } from 'react';
const axios = require('axios');

export default function EntryForm() {
    const [entry, setEntry] = useState({
        reason: "",
        amount: 0,
        date: "",
        type: ""
    });

    const [errors, setErrors] = useState({
        reason: "Please add the reason of the entry.",
        amount: "Please especify a positive amount for the entry.",
        date: "Please choose a valid date for the entry.",
        type: "Please, choose if the entry is a substraction or adition."
    });
    
    function validateEntry (entry) {
        let errors = {};

        if (entry.reason === "") {
                errors.reason = "Please add the reason of the entry."
        };
        if (entry.amount <= 0) {
                errors.amount = "Please especify a positive amount for the entry."
        };
        if (entry.date === "") {
                errors.date = "Please choose a valid date for the entry."
        };
        if (entry.type === "") {
                errors.type = "Please, choose if the entry is a substraction or adition."
        };

        return errors;
    };

    function handleChange (e) {
        e.preventDefault();

        setErrors(validateEntry({...entry, [e.target.name]: e.target.value}))

        setEntry((entry) => ({
            ...entry,
            [e.target.name]: e.target.value
        }));
    };

    async function addEntry (entry) {
        await axios({
            method: 'post',
            url: 'http://localhost:3001/entries',
            data: entry
        })
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
                    addEntry(entry);
                }}>
                    <div>
                        <h4>Operation:</h4>
                        <input name="reason" type="text" placeholder="Reason..." value={entry.reason} onChange={(e) => handleChange(e)} />
                        <input name="amount" type="number" min="1" placeholder="Amount..." value={entry.amount} onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <h4>Operation Date:</h4>
                        <input name="date" type="date" value={entry.date} onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <h4>Operation Type:</h4>
                        <select name="type" value={entry.type} onChange={(e) => handleChange(e)} >
                            <option value="adition">Adition</option>
                            <option value="extraction">Extraction</option>
                        </select>
                    </div>
                    {validateButton(errors) ? <button type="submit" disabled>Add</button> : <button type="submit">Add</button>}
                </form>
            </div>
    )
}