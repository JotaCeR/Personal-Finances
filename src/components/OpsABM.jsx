import React from 'react';

export default function ABM() {
    return (
        <div>
            <h1>ABM Operations</h1>
            <div>
                <h3>New Entry</h3>
                <form>
                    <div>
                        <h4>Operation:</h4>
                        <input name="reason" type="text" placeholder="Reason..." />
                        <input name="amount" type="number" min="0.1" placeholder="Amount..." />
                    </div>
                    <div>
                        <h4>Operation Date:</h4>
                        <input name="date" type="date" />
                    </div>
                    <div>
                        <h4>Operation Type:</h4>
                        <label>Addtion</label>
                        <input name="addition" value="add" type="checkbox" />
                        <label>Extraction</label>
                        <input name="extraction" value="rem" type="checkbox" />
                    </div>
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