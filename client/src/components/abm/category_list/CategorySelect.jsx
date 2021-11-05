import React, { useEffect } from 'react';
import '../../../styles/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../../actions/operationsActions';
import CategoryOption from './CategoryOption';

export default function CategoryItem ({category, i, changeHandler, categoryRemover}) {
    const dispatch = useDispatch();

    let categories = useSelector((state) => state.categories.allCategories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    return (
        <div id={i} className="w-2/5 flex flex-row justify-evenly">
            <select className="glob-sel focus:outline-none" value={category} onChange={(e) => changeHandler(i, e)} >
                <option key='defaultValue' value={''}></option>
                {Array.isArray(categories) ? categories.map(cat => <CategoryOption key={cat.id} value={cat.name} name={cat.name} />) : null}
            </select>
            <button className="glob-sel bg-pink-700 px-2 py-1 rounded-lg font-normal text-aquamarine-50 text-xs shadow-2xl hover:text-grey-900 focus:shadow-inner" onClick={(e) => categoryRemover(i)}>Remove</button>
        </div>
    )
};