"use client";

import { useEffect, useState } from 'react';
import ProjectCard from "@/components/ProjectCard";

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
}

export default function Home() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then((data: Project[]) => setProjects(data));
    }, []);

    return (
        <div className="p-8">

            {/* Hero Section */}
            <main id="home" className="px-8 pt-32 pb-16">
                <h1 className="text-6xl font-bold mb-4">Bonjour, je suis Damien</h1>
                <p className="text-4xl mb-4">Concepteur Développeur d'Applications</p>
                <img src="/data/audiowave.jpg" alt="audiowave" />
            </main>

            {/* About Me Section */}
            <section id="aboutMe" className="pt-32 pb-216">
                <h1 className="text-4xl font-bold mb-4 pb-4">~$ whoami</h1>
                <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aliquid architecto commodi,
                    consectetur esse excepturi expedita illum inventore iste nostrum nulla numquam placeat quisquam
                    quos. Dolor natus officia quia.
                </p>
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
                            link={project.link}
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
                        <input type="text" name="firstName" id="firstName" required className="border p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="font-medium">Last Name</label>
                        <input type="text" name="lastName" id="lastName" required className="border p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-medium">Email</label>
                        <input type="email" name="email" id="email" required className="border p-2 rounded" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
                </form>
            </section>

        </div>
    );
}
