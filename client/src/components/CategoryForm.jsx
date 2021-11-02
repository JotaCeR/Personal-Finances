import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategories } from '../actions/operationsActions';
const axios = require('axios');

export default function CategoryForm() {
    const [category, setCategory] = useState({name: ""});

    const dispatch = useDispatch();

    function handleChange (e) {
        e.preventDefault();
        const name = e.target.value.toLowerCase();
        setCategory((cat) => ({
            ...cat,
            name: name
        }));
    }

    async function addCategory (category) {
        await axios({
            method: 'post',
            url: 'http://localhost:3001/categories/new',
            data: category
        });

        setCategory((cat) => ({
            ...cat,
            name: ""
        }));

        dispatch(getAllCategories());
    };
    
    return (
        <div>
            <h3>New Category</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                addCategory(category);
            }} >
                <div>
                    <h4>Name:</h4>
                    <input name="name" type="text" placeholder="Category name..." value={category.name} onChange={(e) => handleChange(e)} />
                </div>
                {category.name && category.name !== "" ? <button type="submit">Add</button> : <button type="submit" disabled>Add</button>}
            </form>
        </div>
    )
}