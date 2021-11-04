import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getEditForm, getAddEntries, getExtEntries } from '../actions/operationsActions';
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
        <div>
            <h3>Edit Entry</h3>
            <form onSubmit={(e) => {
                e.preventDefault();

                setEntry((entry) => ({
                    ...entry,
                    date: new Date(entry.date)
                }));

                updateEntry(entry);
            }}>
                <button onClick={(e) => cancelEdit(e)}>X</button>
                <div>
                    <h4>Reason:</h4>
                    <input name="reason" type="text" placeholder={entry.reason} value={entry.reason}
                    onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h4>Amount:</h4>
                    <input name="amount" type="number" placeholder={entry.amount} value={entry.amount}
                    onChange={(e) => handleChange(e)} min="0" step="0.01" />
                </div>
                <div>
                    <h4>Date:</h4>
                    <input name="date" type="date" placeholder={entry.date} value={entry.date}
                    onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h4>Categories</h4>
                    <ul>
                        {categories.map((name) => <li>{name}  <button type="button" name={name} onClick={(e) => updateCategories(e)}>X</button></li>)}
                    </ul>
                </div>
                <div>
                    <button type="submit">Confirm</button><button type="reset">Reset</button>
                </div>
            </form>
        </div>
    )
};