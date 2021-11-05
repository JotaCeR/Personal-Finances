import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddEntries, getExtEntries, getAllCategories, resetEntryCategories } from '../../actions/operationsActions';
import CategoryList from './category_list/CategoryList';
import '../../index.css';
const axios = require('axios');

export default function EntryForm() {
    const [entry, setEntry] = useState({
        reason: "",
        amount: 0,
        date: "",
        type: "",
    });

    const [errors, setErrors] = useState({
        amount: "Please especify a positive amount for the entry.",
        type: "Please, choose if the entry is a substraction or adition."
    });

    const dispatch = useDispatch();
    const typeVal = undefined;

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    let entryCategories = useSelector((state) => state.categories.entryCategories);
    let categories = useSelector((state) => state.categories.allCategories);
    
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

    useEffect(() => {
        if (entryCategories !== null) {
            setEntry((entry) => ({
                ...entry,
                categories: entryCategories
            }));
        };
    }, [entryCategories]);

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
        dispatch(resetEntryCategories());

        setEntry((entry) => ({
            ...entry,
            reason: "",
            amount: 0,
            date: "",
            type: "",
        }));
    };

    function validateButton(errors) {
        const validation = Object.keys(errors);

        if (validation.length > 0) {
            return true
        } else {
            return false
        }
    };

    return (
        <div className="w-96 h-96 bg-forest-300 shadow-2xl border-2 border-forest-200 flex flex-col justify-start items-start p-4 overflow-y-scroll">
                <h3 className="font-sub-title text-2xl text-pink-700 self-center">New Entry</h3>
                <form className="w-full h-full flex flex-col justify-start items-start" onSubmit={(e) => {
                    e.preventDefault();
                    
                    if (entry.date !== null) {
                        setEntry((entry) => ({
                            ...entry,
                            date: new Date(entry.date)
                        }));
                    };
                    
                    addEntry(entry);
                }}>
                    <div className="flex flex-col justify-start items-center my-3.5 w-full">
                        <h4 className="text-lightblue-600 text-xl font-sub-title self-start mb-3">Operation:</h4>
                        <input className="font-normal text-grey-600 text-md my-1 focus:outline-none rounded glob-sel" name="reason" type="text" placeholder="Reason..." value={entry.reason} onChange={(e) => handleChange(e)} />
                        <input className="font-normal text-grey-600 text-md my-1 focus:outline-none rounded glob-sel" name="amount" type="number" min="0" step="0.01" placeholder="Amount..." value={entry.amount} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="flex flex-col justify-start items-center my-3.5 w-full">
                        <h4 className="text-lightblue-600 text-xl font-sub-title self-start mb-3">Operation Date:</h4>
                        <input className="font-normal text-grey-600 text-md my-1 focus:outline-none rounded glob-sel" name="date" type="date" value={entry.date} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="flex flex-col justify-start items-center my-3.5 w-full">
                        <h4 className="text-lightblue-600 text-xl font-sub-title self-start mb-3">Operation Type:</h4>
                        <select className="font-normal text-grey-600 text-md my-1 focus:outline-none rounded glob-sel" name="type" value={entry.type} onChange={(e) => handleChange(e)} >
                            <option value={typeVal}></option>
                            <option value="adition">Adition</option>
                            <option value="extraction">Extraction</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-start items-center my-3.5 w-full">
                        <h4 className="text-lightblue-600 text-xl font-sub-title self-start mb-3">Operation Categories:</h4>
                        {Array.isArray(categories) ? <CategoryList categories={categories} entryCats={entryCategories} /> : "No categories found..."}
                    </div>
                    {validateButton(errors) ? <button type="submit" disabled className="bg-grey-800 px-4 py-2 rounded-lg font-normal text-grey-500 self-end shadow-inner">Add</button> : <button type="submit" className="bg-forest-700 px-4 py-2 rounded-lg font-normal text-aquamarine-50 shadow-2xl self-end hover:text-pink-600 focus:shadow-inner">Add</button>}
                </form>
            </div>
    )
}