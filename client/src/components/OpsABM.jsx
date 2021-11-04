import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EntryForm from './EntryForm';
import EntryItem from './EntryItem';
import EditForm from './EditForm';
import CategoryForm from './CategoryForm';
import { getAddEntries, getExtEntries } from '../actions/operationsActions';

export default function ABM() {
    const dispatch = useDispatch();

    let addEntries = useSelector((state) => state.entriesHistory.addEntries);
    let extEntries = useSelector((state) => state.entriesHistory.extEntries);
    let editingEntry = useSelector((state) => state.editingEntry.entry);

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
            <CategoryForm />
            <div>
                {editingEntry ? <EditForm id={editingEntry.id} reason={editingEntry.reason} amount={editingEntry.amount} date={editingEntry.date} type={editingEntry.type} /> : null}
                <div>
                    <h4>Extractions Histoy</h4>
                    <ul>
                        {extEntries ? extEntries.map((entry) => {return <EntryItem key={entry.id} reason={entry.reason} id={entry.id} amount={entry.amount} date={entry.date} type={entry.type} categories={entry.categories} />}) : "Empty..."}
                    </ul>
                </div>
                <div>
                    <h4>Additions Histoy</h4>
                    <ul>
                        {Array.isArray(addEntries) && addEntries.length > 0 ? addEntries.map((entry) => {return <EntryItem key={entry.id} reason={entry.reason} id={entry.id} amount={entry.amount} date={entry.date} type={entry.type} categories={entry.categories} />}) : "Empty..."}
                    </ul>
                </div>
            </div>
        </div>
    )
}