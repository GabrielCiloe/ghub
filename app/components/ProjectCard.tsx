import React from "react";

interface ProjectCardProps {
    imagem: string; // Agora é uma string que representa o URL da imagem
    link: string;
}

export function ProjectCard({ imagem, link }: ProjectCardProps) {
    return (
        <a href={link} target="_blank" className="flex flex-col justify-center items-center bg-black p-5 rounded-2xl w-full h-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imagem} alt="Imagem do projeto" className="mb-4" />

            <p className="font-mono text-white hover:underline underline-offset-2">
                Acessar
            </p>
        </a>
    );
}