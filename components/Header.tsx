"use client";

import {useEffect, useState} from 'react';
import Link from "next/link";

export default function Header() {

    const [darkMode, setDarkMode] = useState(false);
    const [showHeader, setShowHeader] = useState(true); // State to manage visibility
    const [mouseActive, setMouseActive] = useState(true); // State to detect mouse activity
    const [isMouseInNav, setIsMouseInNav] = useState(false); // State to check if mouse is in the navbar

    //Handle mouse movement
    const handleMouseMove = () => {
        setMouseActive(true); // Mouse is moving, show the header
    }

    // Hide the header after 2 seconds of mouse inactivity
    useEffect(() => {
        const inactivityTimeout = setTimeout(() => {
            if (!isMouseInNav && !mouseActive) {
                setShowHeader(false); // Hide header after inactivity
            }
        }, 2000); // 2 seconds timeout

        return () => clearTimeout(inactivityTimeout); // Clean up on component unmount
    }, [mouseActive, isMouseInNav]);

    // Handle mouse entering and leaving the navbar
    const handleMouseEnterNav = () => {
        setIsMouseInNav(true); // Mouse entered the navbar
        setMouseActive(true); // Reactivate mouse activity immediately
    };

    const handleMouseLeaveNav = () => {
        setIsMouseInNav(false); // Mouse left the navbar
    };

    // Handle mouse inactivity
    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove); // Listen for mouse movement

        return () => {
            document.removeEventListener("mousemove", handleMouseMove); // Clean up on component unmount
        };
    }, []);



    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return newMode;
        });
    };

    useEffect(() => {
        // Check system preference for dark mode
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (    <header
            className={`transition-transform duration-300 fixed top-0 left-0 w-full z-10 ${
                showHeader ? "transform-none" : "-translate-y-full"
            }`}
        >
            <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 dark:text-white shadow-md transition-colors">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300">Damien Lobato</h1>
                <ul className="flex space-x-4 text-lg">
                    <li><Link href="#home" className="hover:underline">Home</Link></li>
                    <li><Link href="#aboutMe" className="hover:underline">About Me</Link></li>
                    <li><Link href="#projects" className="hover:underline">Projects</Link></li>
                    <li><Link href="#contact" className="hover:underline">Contact</Link></li>
                    <li className="bg-amber-500 px-3 py-1 rounded">Language</li>
                    <li>
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 transition-all"
                        >
                            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
