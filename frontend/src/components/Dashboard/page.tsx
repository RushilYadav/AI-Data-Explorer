"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Page() {
    const [activeSection, setActiveSection] = useState("Home");

    return (
        <div className="flex h-screen">
        <Sidebar active={activeSection} setActive={setActiveSection} />
        <div className="flex-1 flex flex-col">
            <Navbar />
            <MainContent active={activeSection} />
        </div>
        </div>
    );
}