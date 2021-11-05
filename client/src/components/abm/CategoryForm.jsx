import '../../index.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategories } from '../../actions/operationsActions';
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
        <div className="w-96 h-54 bg-forest-300 shadow-2xl border-2 border-forest-200 flex flex-col justify-start items-start p-4 my-10">
            <h3 className="font-sub-title text-2xl text-pink-700 self-center">New Category</h3>
            <form className="w-full h-full flex flex-col justify-start items-start" onSubmit={(e) => {
                e.preventDefault();
                addCategory(category);
            }} >
                <div className="w-full flex flex-col justify-start items-center my-3.5">
                    <h4 className="text-lightblue-600 text-xl font-sub-title self-start mb-3">Name:</h4>
                    <input className="font-normal text-grey-600 text-md my-1 focus:outline-none rounded glob-sel" name="name" type="text" placeholder="Category name..." value={category.name} onChange={(e) => handleChange(e)} />
                </div>
                {category.name && category.name !== "" ? <button className="bg-grey-800 px-4 py-2 rounded-lg font-normal text-grey-500 self-end shadow-inner" type="submit">Add</button> : <button className="bg-forest-700 px-4 py-2 rounded-lg font-normal text-aquamarine-50 shadow-2xl self-end hover:text-pink-600 focus:shadow-inner" type="submit" disabled>Add</button>}
            </form>
        </div>
    )
}