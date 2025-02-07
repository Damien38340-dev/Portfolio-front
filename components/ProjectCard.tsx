"use client";

type ProjectProps = {
    title: string;
    description: string;
    link: string;
};

export default function ProjectCard({ title, description, link }: ProjectProps) {
    return (
        <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Voir le projet
            </a>
        </div>
    );
}
