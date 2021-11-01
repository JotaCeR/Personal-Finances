import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setEntryCategories } from '../actions/operationsActions';
import CategoryItem from './CategoryItem';

export default function CategoryList ({categories, entryCats}) {
    const dispatch = useDispatch();
    const [checks, setChecks] = useState(['']);

    useEffect(() => {
        const categoryObjects = checks.map((categoryName) => {
            const categoryObject = categories.find((obj) => {return obj.name === categoryName});
            return categoryObject;
        });
        
        dispatch(setEntryCategories(categoryObjects));
        console.log(categoryObjects);
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
        return checks.map((category, i) => <CategoryItem key={i} category={category} i={i} changeHandler={handleChange} categoryRemover={removeCategory} />)
    }

    return (
        <div>
            {dynamicInputs()}
            <button type="button" name="Add Category" onClick={(e) => newCategory()}>Add Category</button>
        </div>
    )
};