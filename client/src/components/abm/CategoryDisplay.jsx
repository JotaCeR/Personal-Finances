import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, getAddEntries, getExtEntries } from '../../actions/operationsActions';
const axios = require('axios');

export default function CategoryDisplay() {
    const dispatch = useDispatch();

    let categories = useSelector((state) => state.categories.allCategories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    async function handleDelete(e) {
        e.preventDefault();

        window.alert(`Category: ${e.target.name} successfully deleted!`);

        await axios({
            method: 'delete',
            url: `http://localhost:3001/categories/delete/${e.target.value}`
        });

        dispatch(getAllCategories());
        dispatch(getExtEntries());
        dispatch(getAddEntries());
    }

    return (
        <div>
            <ul>
                {Array.isArray(categories) ? categories.map((category) => <li key={category.id}>{category.name} <button type="button" name={category.name} value={category.id} onClick={(e) => handleDelete(e)} >X</button></li>) : categories}
            </ul>
        </div>
    )
};