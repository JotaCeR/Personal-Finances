import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../actions/operationsActions';
import CategoryOption from './CategoryOption';

export default function CategoryItem ({category, i, changeHandler, categoryRemover}) {
    const dispatch = useDispatch();

    let categories = useSelector((state) => state.categories.allCategories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    return (
        <div id={i}>
            <select value={category} onChange={(e) => changeHandler(i, e)} >
                <option key='defaultValue' value={''}></option>
                {Array.isArray(categories) ? categories.map(cat => <CategoryOption key={cat.id} value={cat.name} name={cat.name} />) : null}
            </select>
            <button onClick={(e) => categoryRemover(i)}>Remove</button>
        </div>
    )
};