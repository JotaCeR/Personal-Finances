import React from 'react';

export default function CategoryOption({value, name}) {
    return (
        <option value={value}>
            {name}
        </option>
    );
}