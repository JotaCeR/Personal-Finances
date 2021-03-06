import React from 'react';
import '../../styles/entries.css';
import '../../styles/index.css';
import { useDispatch } from 'react-redux';
import { getEditForm, getAddEntries, getExtEntries } from '../../actions/operationsActions';
import { FiXCircle as Xbut } from "react-icons/fi";
import { FiEdit3 as Ebut} from "react-icons/fi";
const axios = require('axios');

export default function ListItem ({id, reason, amount, date, type, categories}) {
    const dispatch = useDispatch();
    const entry = {id, reason, amount, date, type, categories};
    let showDate;
    
    if (date !== null) {
        showDate = date.slice(0, 10);
    } else {
        showDate = date;
    }

    async function handleDelete (e, id) {
        e.preventDefault();
        await axios.delete(`http://localhost:3001/entries/delete/${id}`);

        dispatch(getAddEntries());
        dispatch(getExtEntries());
    };

    async function handleEdit (e, {id, reason, amount, date, categories}) {
        e.preventDefault();
        dispatch(getEditForm({id, reason, amount, date, categories}));
    };

    // useEffect(() => {
    //     dispatch(updateEntries(actionType));
    // }, [actionType, dispatch, handleDelete]);

    return (
        <li id={id} className="flex flex-row text-center my-4">
            <table className="table-auto">
                <thead className="text-lightblue-600 font-sub-title">
                    <tr>
                        <th className="glob-sel border-r-2 border-l-2 border-forest-500">Reason</th>
                        <th className="glob-sel border-r-2 border-forest-500">Amount</th>
                        <th className="glob-sel border-r-2 border-forest-500">Date</th>
                        <th className="glob-sel border-r-2 border-forest-500">Categories</th>
                    </tr>
                </thead>
                <tbody className="font-normal">
                    <tr>
                        <td className="border-r-2 border-l-2 border-forest-500 glob-sel">{reason}</td>
                        <td className="border-r-2 border-forest-500 glob-sel">{amount}</td>
                        <td className="border-r-2 border-forest-500 glob-sel">{showDate}</td>
                        <td className="border-r-2 border-forest-500 glob-sel"><ul>{categories.map((name) => <li className="glob-sel">{name}</li>)}</ul></td>
                    </tr>
                </tbody>
            </table>
            <button className="mx-4 text-aquamarine-600 hover:text-lightblue-300" onClick={(e) => handleEdit(e, entry)}><Ebut size="22"/></button>
            <button className="text-pink-500 hover:text-lightblue-300" onClick={(e) => handleDelete(e, id)}><Xbut size="22" /></button>
        </li>
    )
};