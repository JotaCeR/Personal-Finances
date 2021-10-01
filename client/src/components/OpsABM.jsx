import React from 'react';
import EntryForm from './EntryForm';

export default function ABM() {
    return (
        <div>
            <h1>ABM Operations</h1>
            <EntryForm />
            <div>
                <div>
                    <h4>Last Extractions</h4>
                    <p>Empty</p>
                </div>
                <div>
                    <h4>Last Additions</h4>
                    <p>Empty</p>
                </div>
            </div>
        </div>
    )
}