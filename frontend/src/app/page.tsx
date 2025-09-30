"use client";
import { useState } from "react";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";

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