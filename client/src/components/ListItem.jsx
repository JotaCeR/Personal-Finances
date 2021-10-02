import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteEntry } from '../actions/operationsActions';
const axios = require('axios');

export default function ListItem ({reason, id, amount, date}) {
    // const dispatch = useDispatch();

    async function handleDelete (e, id) {
        e.preventDefault();
        await axios.delete(`http://localhost:3001/entries/delete/${id}`)
    };

    return (
        <li id={id}>
            <table>
                <tr>
                    <th>Reason</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td>{reason}</td>
                    <td>{amount}</td>
                    <td>{date}</td>
                    <td><button>Edit</button></td>
                    <td><button onClick={(e) => handleDelete(e, id)}>Delete</button></td>
                </tr>
            </table>
        </li>
    )
};