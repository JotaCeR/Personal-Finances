import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EntryForm from './EntryForm';
const opsActions = require('../actions/operationsActions');

export default function ABM() {
    const dispatch = useDispatch();

    let addEntries = useSelector((state) => state.entriesHistory.addEntries);
    let extEntries = useSelector((state) => state.entriesHistory.extEntries);

    useEffect(() => {
        dispatch(opsActions.getAddEntries());
    }, [dispatch]); 

    useEffect(() => {
        dispatch(opsActions.getExtEntries());
    }, [dispatch]);


    return (
        <div>
            <h1>ABM Operations</h1>
            <EntryForm />
            <div>
                <div>
                    <h4>Extractions Histoy</h4>
                    <ul>
                        {extEntries ? extEntries.map((entry) => {return <li>Reason: {entry.reason}, Amount: {entry.amount}, Date: {entry.date}</li>}) : "Empty..."}
                    </ul>
                </div>
                <div>
                    <h4>Additions Histoy</h4>
                    <ul>
                        {addEntries ? addEntries.map((entry) => {return <li>Reason: {entry.reason}, Amount: {entry.amount}, Date: {entry.date}</li>}) : "Empty..."}
                    </ul>
                </div>
            </div>
        </div>
    )
}