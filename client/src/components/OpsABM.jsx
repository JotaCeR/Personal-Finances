import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EntryForm from './EntryForm';
import ListItem from './ListItem';
import { getAddEntries, getExtEntries } from '../actions/operationsActions';

export default function ABM() {
    const dispatch = useDispatch();

    let addEntries = useSelector((state) => state.entriesHistory.addEntries);
    let extEntries = useSelector((state) => state.entriesHistory.extEntries);

    useEffect(() => {
        dispatch(getAddEntries());
    }, [dispatch]); 

    useEffect(() => {
        dispatch(getExtEntries());
    }, [dispatch]);

    return (
        <div>
            <h1>ABM Operations</h1>
            <EntryForm />
            <div>
                <div>
                    <h4>Extractions Histoy</h4>
                    <ul>
                        {extEntries ? extEntries.map((entry) => {return <ListItem key={entry.id} reason={entry.reason} id={entry.id} amount={entry.amount} date={entry.date} />}) : "Empty..."}
                    </ul>
                </div>
                <div>
                    <h4>Additions Histoy</h4>
                    <ul>
                        {addEntries ? addEntries.map((entry) => {return <ListItem key={entry.id} reason={entry.reason} id={entry.id} amount={entry.amount} date={entry.date} />}) : "Empty..."}
                    </ul>
                </div>
            </div>
        </div>
    )
}