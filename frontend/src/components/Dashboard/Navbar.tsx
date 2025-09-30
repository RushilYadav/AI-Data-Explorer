import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-white p-4 shadow flex items-center justify-between">
            <h2 className="text-2xl font-bold">(Logged in user)</h2>
            <div className="flex items-center space-x-4">
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Log Out</button>
            </div>
        </nav>
    );
}