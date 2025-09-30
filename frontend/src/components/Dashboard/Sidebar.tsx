"use client";
import React from "react";

type SidebarProps = {
    active: string;
    setActive: (section: string) => void;
};

export default function Sidebar({ active, setActive }: SidebarProps) {

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

    return (
        <aside className="w-64 bg-gray-100 p-4 flex flex-col h-screen">
            <h2 className="text-2xl font-bold mb-6">AI Data Explorer</h2>
            <ul className="space-y-3">
                {sections.map((section) => (
                    <li
                        key={section}
                        className={`cursor-pointer ${
                            active === section
                                ? "text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                        }`}
                        onClick={() => setActive(section)}
                    >
                        {section}
                    </li>
                ))}
            </ul>
        </aside>
    );
}