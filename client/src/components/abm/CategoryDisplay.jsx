import React, { useEffect } from 'react';
import '../../styles/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, getAddEntries, getExtEntries } from '../../actions/operationsActions';
import { FiXCircle as Xbut } from "react-icons/fi";
const axios = require('axios');

export default function CategoryDisplay() {
    const dispatch = useDispatch();

    let categories = useSelector((state) => state.categories.allCategories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    async function handleDelete(e, name, id) {
        e.preventDefault();

        window.alert(`Category: ${name} successfully deleted!`);

        console.log(`The id: ${id} & the name: ${name}`);

        await axios({
            method: 'delete',
            url: `http://localhost:3001/categories/delete/${id}`
        });

        dispatch(getAllCategories());
        dispatch(getExtEntries());
        dispatch(getAddEntries());
    }

    return (
        <div className="font-normal glob-sel" >
            <ul>
                {Array.isArray(categories) ? categories.map((category) => <li className="glob-sel text-grey-900 font-extrabold" key={category.id}>{category.name} <button className="delBut glob-sel text-pink-400 hover:text-lightblue-200" type="button" onClick={(e) => handleDelete(e, category.name, category.id)} ><Xbut size="14" /></button></li>) : categories}
            </ul>
        </div>
    )
};