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
        <li id={id} className="flex flex-row text-center my-4">
            <table className="table-auto">
                <thead className="text-lightblue-600 font-sub-title">
                    <tr>
                        <th className="glob-sel border-r-2 border-l-2 border-forest-500" >Reason</th>
                        <th className="glob-sel border-r-2 border-forest-500">Amount</th>
                        <th className="glob-sel border-r-2 border-forest-500">Date</th>
                        <th className="glob-sel border-r-2 border-forest-500">Type</th>
                        <th className="glob-sel border-r-2 border-forest-500">Categories</th>
                    </tr>
                </thead>
                <tbody className="font-normal">
                    <tr>
                        <td className="glob-sel border-r-2 border-l-2 border-forest-500">{reason}</td>
                        <td className="glob-sel border-r-2 border-forest-500">{amount}</td>
                        <td className="glob-sel border-r-2 border-forest-500">{showDate}</td>
                        <td className="glob-sel border-r-2 border-forest-500">{type}</td>
                        <td className="glob-sel border-r-2 border-forest-500"><ul>{categories.map((name) => <li className="glob-sel">{name}</li>)}</ul></td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
};