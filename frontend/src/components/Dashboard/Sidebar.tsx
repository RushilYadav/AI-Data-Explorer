"use client";
import React from "react";

type SidebarProps = {
    active: string;
    setActive: (section: string) => void;
};

const sections = [
    "Home",
    "Insights",
    "Visualisations",
    "Dashboards",
    "Predictions",
    "Collaboration",
    "Reports",
    "Settings",
];

export default function Sidebar({ active, setActive }: SidebarProps) {
    return (
        <aside className="w-64 bg-gray-700 p-4 flex flex-col h-screen">
            <h2 className="text-2xl text-white font-bold mb-6">AI Data Explorer</h2>
            <ul className="space-y-2 flex-1">
                {sections.map((section) => (
                    <li
                        key={section}
                        onClick={() => setActive(section)}
                        className={`px-4 py-3 rounded-lg text-lg font-medium cursor-pointer transition ${
                            active === section
                                ? "bg-gray-500 text-white shadow"
                                : "text-white hover:bg-gray-100 hover:text-gray-700"
                        }`}
                    >
                        {section}
                    </li>
                ))}
            </ul>
        </aside>
    );
}