import React, { useEffect } from 'react';
import '../../styles/index.css';
import '../../styles/entries.css';
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
        <div className="flex flex-col justify-start items-center w-full glob-sel">
            <div className="glob-sel bg-gradient-to-br from-lightblue-400 to-green-600 w-9/12 h-40 flex flex-col justify-around items-center shadow-2xl rounded-2xl my-6">
                <h1 className="glob-sel font-title text-7xl tracking-wide text-aquamarine-800">ABM Operations</h1>
                <NavBar className="glob-sel" />
            </div>
            <div className="flex flex-row justify-around items-start w-9/12">
                <div>
                    <EntryForm />
                    <CategoryForm />
                </div>
                <div>
                    <div>
                        {editingEntry ? <EditForm id={editingEntry.id} reason={editingEntry.reason} amount={editingEntry.amount} date={editingEntry.date} type={editingEntry.type} categories={editingEntry.categories} /> : null}
                        <div className="h-96 w-full bg-forest-300 shadow-2xl border-2 border-forest-200 flex flex-col justify-start items-center p-4 overflow-y-scroll scrollbar scrollbar-thumb-pink-500 scrollbar-track-pink-900">
                            <h4 className="font-sub-title text-2xl text-pink-700 self-center">Extractions History</h4>
                            <ul>
                                {Array.isArray(extEntries) ? extEntries.map((entry) => {return <EntryItem key={entry.id} reason={entry.reason} id={entry.id} amount={entry.amount} date={entry.date} type={entry.type} categories={entry.categories} />}) : <div className="font-normal text-xl font-semibold leading-5 text-lightblue-600" >{extEntries}</div>}
                            </ul>
                        </div>
                        <div className="h-96 w-full bg-forest-300 shadow-2xl border-2 border-forest-200 flex flex-col justify-start items-center p-4 my-10 overflow-y-scroll scrollbar scrollbar-thumb-pink-500 scrollbar-track-pink-900">
                            <h4 className="font-sub-title text-2xl text-pink-700 self-center">Additions History</h4>
                            <ul>
                                {Array.isArray(addEntries) && addEntries.length > 0 ? addEntries.map((entry) => {return <EntryItem key={entry.id} reason={entry.reason} id={entry.id} amount={entry.amount} date={entry.date} type={entry.type} categories={entry.categories} />}) : <div className="font-normal text-xl font-semibold leading-5 text-lightblue-600" >{addEntries}</div>}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-forest-300 shadow-2xl border-2 border-forest-200 flex flex-col justify-start items-center p-4 overflow-y-scroll mb-8 scrollbar scrollbar-thumb-pink-500 scrollbar-track-pink-900">
                        <h4 className="font-sub-title text-2xl text-pink-700 self-center">Available Categories</h4>
                        <CategoryDisplay />
                    </div>
                </div>
            </div>
        </div>
    )
}