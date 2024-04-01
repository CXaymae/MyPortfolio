import React from 'react';
import {
    SiExpress,
    SiHtml5,
    SiReact,
    SiMongodb,
    SiTailwindcss,
    SiTypescript,
    SiKubernetes,
    SiJenkins,
    SiGit,
    SiGithub,
    SiMicrosoftazure,
    SiPython,
    SiSpringboot,
} from "react-icons/si";

export default function Skills() {
    const listOfSkills = [
        {
            Icon: SiHtml5,
            text: "HTML5",
        },
        {
            Icon: SiTailwindcss,
            text: "Tailwind CSS",
        },
        {
            Icon: SiTypescript,
            text: "TypeScript",
        },
        {
            Icon: SiReact,
            text: "React",
        },
        {
            Icon: SiMongodb,
            text: "MongoDB",
        },
        {
            Icon: SiGithub,
            text: "GitHub",
        },
        {
            Icon: SiPython,
            text: "Python",
        },
        {
            Icon: SiKubernetes,
            text: "Kubernetes",
        },
        {
            Icon: SiSpringboot,
            text: "Spring Boot",
        },
        {
            Icon: SiGit,
            text: "Git",
        },
        {
            Icon: SiMicrosoftazure,
            text: "Microsoft Azure",
        },
        {
            Icon: SiJenkins,
            text: "Jenkins",
        },
    ];

    return (
        <div>
            <h2>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {listOfSkills.map((skill, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <skill.Icon size={40} />
                        <span style={{ marginTop: '5px' }}>{skill.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
