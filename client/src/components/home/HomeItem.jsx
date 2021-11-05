import React from 'react';

export default function HomeItem({id, reason, amount, date, type, categories}) {
    let showDate = date;

    console.log(date);
    if (date !== null || date !== undefined) {
        showDate = date.slice(0, 10);
    } else {
        showDate = date;
    }

    return (
        <li id={id}>
            <table>
                <thead>
                    <tr>
                        <th>Reason</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{reason}</td>
                        <td>{amount}</td>
                        <td>{showDate}</td>
                        <td>{type}</td>
                        <td><ul>{categories.map((name) => <li>{name}</li>)}</ul></td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
};