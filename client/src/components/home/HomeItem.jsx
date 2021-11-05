import React from 'react';
import '../../styles/index.css';

export default function HomeItem({id, reason, amount, date, type, categories}) {
    let showDate = date;

    console.log(date);
    if (date !== null || date !== undefined) {
        showDate = date.slice(0, 10);
    } else {
        showDate = date;
    }

    return (
        <li id={id} className="flex flex-row text-center">
            <table className="table-auto">
                <thead className="text-lightblue-600 font-sub-title">
                    <tr>
                        <th>Reason</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody className="font-normal">
                    <tr>
                        <td className="border-r-2 border-forest-500">{reason}</td>
                        <td className="border-r-2 border-forest-500">{amount}</td>
                        <td className="border-r-2 border-forest-500">{showDate}</td>
                        <td className="border-r-2 border-forest-500">{type}</td>
                        <td><ul>{categories.map((name) => <li>{name}</li>)}</ul></td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
};