import {useEffect, useState} from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
}

export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('data/projects.json')
            .then(response => response.json())
            .then((data: Project[]) => setProjects(data));
    }, []);

    return (

        <div className="p-8">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link}>View on GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}