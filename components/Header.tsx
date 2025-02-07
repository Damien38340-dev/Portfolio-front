"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <nav className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <ul className="flex space-x-4">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/projects" className="hover:underline">Projects</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    <li><Link href="/aboutMe" className="hover:underline">About Me</Link></li>
                </ul>
            </nav>
        </header>
    );
}
