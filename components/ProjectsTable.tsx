'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaRocket } from 'react-icons/fa';

const ProjectsTable = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            skill: 'AI analyzer, AI consultant',
            project: 'MaiBeauti (Next.js, Face++ API)',
            github: 'https://github.com/phuongtoVN/MaiBeauti',
        },
        {
            skill: 'CI/CD, Docker, YAML',
            project: 'Rise of the Elements (React)',
            github: 'https://github.com/phuongtoVN/rise-of-the-elements',
        },
        {
            skill: 'React, UI/UX',
            project: 'Kitchen Alchemy',
            github: 'https://github.com/Zed-CSP/codeConnoisseurs',
        },
        {
            skill: 'Backend (React)',
            project: 'Card-X',
            github: 'https://github.com/escotoj/Card-X',
        },
        {
            skill: 'API Integration',
            project: 'Sneeze the Day',
            github: 'https://github.com/Zed-CSP/dangerForce-Proj-1',
        },
        {
            skill: 'Node.js, Inquirer, SVG',
            project: 'SVG Logo Generator (CLI Tool)',
            github: 'https://github.com/phuongtoVN/SVG-logo-maker',
        },
        {
            skill: 'Node.js, Express, DB',
            project: 'Amazing Note Maker (Note-Taking App)',
            github: 'https://github.com/phuongtoVN/amazing-note-makerr',
        },
        {
            skill: 'JavaScript, API Integration',
            project: 'Weather Dashboard (OpenWeather API)',
            github: 'https://github.com/phuongtoVN/weather_dashboard',
        },
        {
            skill: 'JavaScript, jQuery, Day.js',
            project: 'Workday Scheduler (Time Management)',
            github: 'https://github.com/phuongtoVN/Workday-schedule',
        },
        {
            skill: 'JavaScript, Security',
            project: 'Password Generator (Cybersecurity)',
            github: 'https://github.com/phuongtoVN/Generate-password',
        },
        {
            skill: 'SQL, Node.js, CLI',
            project: 'Employee Tracker (Database Manager)',
            github: 'https://github.com/phuongtoVN/employee-trackerr',
        },
        {
            skill: 'React, TypeScript, Vite, GitHub Pages',
            project: 'Defect Tracker (Front End)',
            github: 'https://github.com/phuongtoVN/defect-tracker',
        },
    ];

    return (
        <section
            ref={ref}
            className="py-20 relative"
            style={{ background: 'linear-gradient(180deg, #0a0514 0%, #140a1f 100%)' }}
        >
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
                        <FaRocket className="text-pink-500" />
                        MORE PROJECTS
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Explore my full range of projects showcasing diverse technical skills across
                        full-stack development, DevOps, and software engineering
                    </p>
                </motion.div>

                {/* Desktop Table */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden md:block glass-card overflow-hidden"
                >
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-pink-500/30">
                                <th className="text-left p-6 text-pink-400 font-semibold">Skill</th>
                                <th className="text-left p-6 text-pink-400 font-semibold">Project</th>
                                <th className="text-center p-6 text-pink-400 font-semibold">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                                    className="border-b border-purple-500/20 hover:bg-purple-900/20 transition-colors"
                                >
                                    <td className="p-6 text-gray-400 text-sm">{project.skill}</td>
                                    <td className="p-6 text-white font-medium">{project.project}</td>
                                    <td className="p-6 text-center">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                                        >
                                            <FaGithub />
                                            <span className="text-sm">View</span>
                                        </a>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                            className="glass-card p-6"
                        >
                            <p className="text-gray-400 text-sm mb-3">{project.skill}</p>
                            <h3 className="text-white font-medium mb-4">{project.project}</h3>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                            >
                                <FaGithub />
                                <span className="text-sm">View on GitHub →</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsTable;
