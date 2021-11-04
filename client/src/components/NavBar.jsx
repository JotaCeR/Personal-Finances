import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            |<Link id='__home00' to='/'>Home</Link>| — |<Link id='__ABM11' to='/operations'>ABM Operations</Link>|
        </div>
    )
};