import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EntryForm from './EntryForm';
import EntryItem from './EntryItem';
import EditForm from './EditForm';
import CategoryForm from './CategoryForm';
import { getAddEntries, getExtEntries } from '../../actions/operationsActions';
import NavBar from '../NavBar';
import CategoryDisplay from './CategoryDisplay';

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
        <div className="flex flex-col justify-start items-center w-full">
            <div className="bg-gradient-to-br from-lightblue-400 to-green-600 w-9/12 h-40 flex flex-col justify-around items-center shadow-2xl rounded-2xl my-6">
                <h1 className="font-title text-7xl tracking-wide text-aquamarine-800">ABM Operations</h1>
                <NavBar />
            </div>
            <div className="flex flex-row justify-around items-start w-9/12">
                <div>
                    <EntryForm />
                    <CategoryForm />
                </div>
                <div>
                    <div>
                        {editingEntry ? <EditForm id={editingEntry.id} reason={editingEntry.reason} amount={editingEntry.amount} date={editingEntry.date} type={editingEntry.type} categories={editingEntry.categories} /> : null}
                        <div>
                            <h4>Extractions History</h4>
                            <ul>
                                {Array.isArray(extEntries) ? extEntries.map((entry) => {return <EntryItem key={entry.id} reason={entry.reason} id={entry.id} amount={entry.amount} date={entry.date} type={entry.type} categories={entry.categories} />}) : extEntries}
                            </ul>
                        </div>
                        <div>
                            <h4>Additions History</h4>
                            <ul>
                                {Array.isArray(addEntries) && addEntries.length > 0 ? addEntries.map((entry) => {return <EntryItem key={entry.id} reason={entry.reason} id={entry.id} amount={entry.amount} date={entry.date} type={entry.type} categories={entry.categories} />}) : addEntries}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4>Available Categories</h4>
                        <CategoryDisplay />
                    </div>
                </div>
            </div>
        </div>
    )
}