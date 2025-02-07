"use client";

import {useEffect, useState} from 'react';
import ProjectCard from "@/components/ProjectCard";

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then((data: Project[]) => setProjects(data));
    }, []);

    return (

        <div className="p-8">
            <h1 className="text-3xl font-bold">My Projects</h1>

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
        </div>
    );
}