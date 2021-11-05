import React from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="flex flex-row justify-around items-center w-full">
            <Link id='__home00' to='/' className="glob-sel font-sub-title text-2xl text-aquamarine-700 hover:text-pink-500 focus:underline">Home</Link><Link id='__ABM11' to='/operations' className="glob-sel font-sub-title text-2xl text-aquamarine-700 hover:text-pink-500 focus:underline">ABM Operations</Link>
        </div>
    )
};