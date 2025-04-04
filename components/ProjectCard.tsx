"use client";

type ProjectProps = {
    title: string;
    description: string;
    links: { url: string; label: string}[];
};

export default function ProjectCard({title, description, links}: ProjectProps) {
    return (
        <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="mt-4 flex gap-4">
                {(links || []).map((link, index) =>(
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline">
                        {link.label}
                    </a>
                ))}
            </div>

        </div>
    );
}
