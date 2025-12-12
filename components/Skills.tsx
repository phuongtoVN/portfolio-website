'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaDocker,
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
    FaLinux,
    FaWindows,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaNpm,
} from 'react-icons/fa';
import {
    SiKubernetes,
    SiGithubactions,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiExpress,
    SiSupabase,
    SiVercel,
    SiPostman,
    SiCplusplus,
    SiWireshark,
    SiKalilinux,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { VscAzureDevops, VscVscodeInsiders } from 'react-icons/vsc';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skillCategories = [
        {
            title: 'DevOps & Cloud',
            skills: [
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'Kubernetes', icon: <SiKubernetes /> },
                { name: 'GitHub Actions', icon: <SiGithubactions /> },
                { name: 'Azure DevOps', icon: <VscAzureDevops /> },
                { name: 'Git', icon: <DiGit /> },
                { name: 'CI/CD', icon: <SiGithubactions /> },
            ],
        },
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React.js', icon: <FaReact /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'HTML5', icon: <FaHtml5 /> },
                { name: 'CSS3', icon: <FaCss3Alt /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                { name: 'Bootstrap', icon: <FaBootstrap /> },
            ],
        },
        {
            title: 'Backend & Databases',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'PostgreSQL', icon: <SiPostgresql /> },
                { name: 'MySQL', icon: <SiMysql /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Supabase', icon: <SiSupabase /> },
            ],
        },
        {
            title: 'Tools & Deployment',
            skills: [
                { name: 'GitHub', icon: <FaGithub /> },
                { name: 'Vercel', icon: <SiVercel /> },
                { name: 'Postman', icon: <SiPostman /> },
                { name: 'VS Code', icon: <VscVscodeInsiders /> },
                { name: 'npm', icon: <FaNpm /> },
            ],
        },
        {
            title: 'Programming Languages',
            skills: [
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'C++', icon: <SiCplusplus /> },
                { name: 'Java', icon: <FaJava /> },
            ],
        },
        {
            title: 'Security & OS',
            skills: [
                { name: 'Wireshark', icon: <SiWireshark /> },
                { name: 'Linux', icon: <FaLinux /> },
                { name: 'Kali Linux', icon: <SiKalilinux /> },
                { name: 'Windows', icon: <FaWindows /> },
            ],
        },
    ];

    return (
        <section
            id="skills"
            ref={ref}
            className="py-20 relative"
            style={{ background: 'linear-gradient(180deg, #140a1f 0%, #0a0514 100%)' }}
        >
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient-text mb-16"
                >
                    SKILLS & TECHNOLOGIES
                </motion.h2>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="glass-card p-8"
                        >
                            <h3 className="text-2xl font-bold text-pink-400 mb-8 text-center">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{
                                            duration: 0.4,
                                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                        }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="flex flex-col items-center gap-3 p-6 bg-purple-900/20 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all cursor-pointer"
                                    >
                                        <span className="text-5xl text-pink-400">{skill.icon}</span>
                                        <span className="text-gray-300 text-sm text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;