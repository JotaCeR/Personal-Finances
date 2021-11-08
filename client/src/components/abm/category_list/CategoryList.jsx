import React, { useState, useEffect } from 'react';
import '../../../styles/index.css';
import { useDispatch } from 'react-redux';
import { setEntryCategories } from '../../../actions/operationsActions';
import CategorySelect from './CategorySelect';

export default function CategoryList ({categories, entryCats}) {
    const dispatch = useDispatch();
    const [checks, setChecks] = useState(['']);

    useEffect(() => {
        const categoryObjects = checks.map((categoryName) => {
            const categoryObject = categories.find((obj) => {return obj.name === categoryName});
            return categoryObject;
        });
        
        dispatch(setEntryCategories(categoryObjects));
        // console.log(categoryObjects);
    }, [categories, checks, dispatch]);

    function resetInputs() {
        setChecks(['']);
    }

    useEffect(() => {
        if (entryCats === null) {
            resetInputs();
        };
    }, [dispatch, entryCats]);

    function handleChange(i, e) {
        e.preventDefault();
        let currentChecks = [...checks];
        currentChecks[i] = e.target.value;
        setChecks(currentChecks);
    };

    function newCategory() {
        if (checks.length < categories.length) {
            setChecks([...checks, '']);
        };
    }

    function removeCategory(i) {
        let newChecks = [...checks];
        newChecks.splice(i, 1);
        setChecks(newChecks);
    }

    function dynamicInputs() {
        return checks.map((category, i) => <CategorySelect key={i} category={category} i={i} changeHandler={handleChange} categoryRemover={removeCategory} />)
    }

    return (
        <div className="w-full flex flex-col justify-start items-center font-normal">
            {dynamicInputs()}
            <button className="glob-sel bg-forest-700 px-2 py-1 mr-5 rounded-lg font-normal text-aquamarine-50 text-xs shadow-2xl self-end hover:text-pink-600 focus:shadow-inner" type="button" name="Add Category" onClick={(e) => newCategory()}>Add Category</button>
        </div>
    )
};