import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-white p-4 shadow flex items-center justify-between">
            <span className="text-lg font-bold">AI Data Explorer</span>
            <div className="flex items-center space-x-4">
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Upload CSV</button>
                <div>User (logged in)</div>
            </div>
        </nav>
    );
}