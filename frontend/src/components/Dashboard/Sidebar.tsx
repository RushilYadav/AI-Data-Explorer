import React from "react";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-100 p-4 flex flex-col h-screen">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <ul className="space-y-3">
                <li className="hover:text-blue-600 cursor-pointer">Overview</li>
                <li className="hover:text-blue-600 cursor-pointer">Data Panel</li>
                <li className="hover:text-blue-600 cursor-pointer">Query Builder</li>
                <li className="hover:text-blue-600 cursor-pointer">Visualisations</li>
                <li className="hover:text-blue-600 cursor-pointer">Reports</li>
                <li className="hover:text-blue-600 cursor-pointer">Settings</li>
            </ul>
        </aside>
    );
}