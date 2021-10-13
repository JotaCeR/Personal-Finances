import React from 'react';
import { useDispatch } from 'react-redux';
import { getEditForm, getAddEntries, getExtEntries } from '../actions/operationsActions';
const axios = require('axios');

export default function ListItem ({reason, id, amount, date, type}) {
    const dispatch = useDispatch();
    let actionType;

    if (type === 'adition') {
        actionType = 'GET_ADD'
    } else if (type === 'extraction') {
        actionType = 'GET_EXT'
    };
    console.log(actionType);

    const entry = {id, reason, amount, date, type}

    async function handleDelete (e, id) {
        e.preventDefault();
        await axios.delete(`http://localhost:3001/entries/delete/${id}`);

        dispatch(getAddEntries());
        dispatch(getExtEntries());
    }

    async function handleEdit (e, {id, reason, amount, date}) {
        e.preventDefault();
        dispatch(getEditForm({id, reason, amount, date}));
    }

    // useEffect(() => {
    //     dispatch(updateEntries(actionType));
    // }, [actionType, dispatch, handleDelete]);

    return (
        <li id={id}>
            <table>
                <thead>
                    <tr>
                        <th>Reason</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{reason}</td>
                        <td>{amount}</td>
                        <td>{date}</td>
                        <td><button onClick={(e) => handleEdit(e, entry)}>Edit</button></td>
                        <td><button onClick={(e) => handleDelete(e, id)}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
};