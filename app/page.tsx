"use client";

import {useEffect, useState} from 'react';
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    description: string;
    links: { url: string; label: string }[];
}

interface NewProject {
    title: string;
    imageUrl: string;
    websiteUrl: string;
    description: string;
}

export default function Home() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [newProject, setNewProject] = useState<NewProject>({
        title: "My Brand New Project",
        imageUrl: "/data/makeitgrowhomepage.png",
        websiteUrl: "https://darling-lily-98e101.netlify.app/",
        description: "Just launched! Check out my latest project"
    });

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then((data: Project[]) => setProjects(data));
    }, []);

    return (
        <div className="p-8">

            {/* Hero Section */}
            <main id="home" className="px-8 pt-28 pb-16">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                        <h1 className="text-6xl font-bold mb-4">Bonjour, je suis Damien</h1>
                        <p className="text-4xl mb-4">Concepteur Développeur d'Applications</p>
                    </div>

                    {/* Brand New Project Feature */}
                    <div className="mt-6 md:mt-0 bg-gray-50 p-6 rounded-lg border border-gray-200 md:max-w-sm">
                        <div
                            className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
                            New Release
                        </div>
                        <h2 className="text-2xl font-bold mb-3">{newProject.title}</h2>
                        <p className="mb-4">{newProject.description}</p>
                        <Link href={newProject.websiteUrl} target="_blank" rel="noopener noreferrer"
                              className="block hover:opacity-90 transition-opacity">
                            <img
                                src={newProject.imageUrl}
                                alt={`${newProject.title} homepage`}
                                className="w-full rounded-lg shadow-lg"
                            />
                            <p className="text-sm text-blue-600 mt-2 flex items-center">
                                Visit website
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                </svg>
                            </p>
                        </Link>
                    </div>
                </div>
            </main>

            <img src="/data/audiowave.jpg" alt="audiowave" className="mt-6"/>

            {/* About Me Section */}
            <section id="aboutMe" className="pt-32 pb-216">
                <h1 className="text-4xl font-bold mb-4 pb-4">~$ whoami</h1>
                <p className="text-xl whitespace-pre-line">
                    {`I'm a motivated learner currently undergoing training in software development. I'm passionate about web, app, and game development.
                    I'm always eager to explore new technologies.`}
                </p>
                <i className="font-light">
                    I'm actively seeking a 12-month work-study program to apply and expand my skills in a real-world
                    environment.
                </i>
            </section>

            {/* Projects Section */}
            <section id="projects" className="p-8 pt-32 pb-16">
                <h2 className="text-3xl font-bold mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            links={project.links}
                        />
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="pt-32 pb-16">
                <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
                <form action="" method="POST" className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="font-medium">First Name</label>
                        <input type="text" name="firstName" id="firstName" required className="border p-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="font-medium">Last Name</label>
                        <input type="text" name="lastName" id="lastName" required className="border p-2 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-medium">Email</label>
                        <input type="email" name="email" id="email" required className="border p-2 rounded"/>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
                </form>
            </section>

        </div>
    );
}