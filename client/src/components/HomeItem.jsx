import React from 'react';

export default function HomeItem({id, reason, amount, date, type}) {
    let showDate;

    if (date !== null) {
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{reason}</td>
                        <td>{amount}</td>
                        <td>{showDate}</td>
                        <td>{type}</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
};