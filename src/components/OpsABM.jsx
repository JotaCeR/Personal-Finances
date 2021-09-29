import React from 'react';

export default function ABM() {
    return (
        <div>
            <h1>ABM Operations</h1>
            <div>
                <h3>New Entry</h3>
                <form>
                    <input name="reason" type="text" />
                    <input name="amount" type="number" min="0.1" />
                    <input name="date" type="date" />
                    <input name="extraction" value="add" type="checkbox" />
                    <input name="sustraction" value="rem" type="checkbox" />
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}