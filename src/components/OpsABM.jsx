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
                    <input name="addition" value="add" type="checkbox" />
                    <input name="extraction" value="rem" type="checkbox" />
                    <button>Add</button>
                </form>
            </div>
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