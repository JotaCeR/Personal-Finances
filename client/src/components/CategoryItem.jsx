import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../actions/operationsActions';

export default function CategoryItem ({category, i, changeHandler, categoryRemover}) {
    const dispatch = useDispatch();

    let categories = useSelector((state) => state.categories.allCategories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    return (
        <div id={i}>
            <select value={category} onChange={(e) => changeHandler(i, e)} >
                <option key='194tn12kjfenf12345#021385$2315213' value={''}></option>
                {categories ? categories.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>) : null}
            </select>
            <button onClick={(e) => categoryRemover(i)}>Remove</button>
        </div>
    )
};