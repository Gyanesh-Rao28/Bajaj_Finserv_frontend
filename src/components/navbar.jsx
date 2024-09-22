import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-white font-bold text-lg mr-4">AP21110010239</span>
                    <span className="text-gray-300">S Gyanesh Rao</span>
                </div>
                <h1 className="text-white font-bold text-xl">Bajaj Assginment</h1>
            </div>
        </nav>
    );
};

export default NavBar;