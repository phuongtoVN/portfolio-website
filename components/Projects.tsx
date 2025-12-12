'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiPostgresql, SiDocker, SiBootstrap, SiNodedotjs, SiExpress, SiMysql } from 'react-icons/si';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            title: 'MAiBeauti',
            subtitle: 'AI-Powered Skin Analysis Platform',
            description:
                'An intelligent skin analysis web application that leverages Face++ API and AI technology to provide real-time facial analysis and personalized skincare recommendations. Features camera capture, image preprocessing with Sharp library, and an AI chatbot consultant powered by Supabase and PostgreSQL backend. The responsive dashboard displays visual metrics and severity indicators for comprehensive skin health assessment.',
            features: [
                '🤖 Real-time AI skin analysis using Face++ API',
                '💬 AI chatbot for personalized skincare recommendations',
                '📊 Interactive dashboard with visual metrics',
                '🔒 Secure backend with PostgreSQL and Supabase',
            ],
            techStack: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'React', icon: <SiReact /> },
                { name: 'Tailwind', icon: <SiTailwindcss /> },
                { name: 'PostgreSQL', icon: <SiPostgresql /> },
            ],
            github: 'https://github.com/phuongtoVN/MaiBeauti',
            demo: '',
            imagePosition: 'left',
        },
        {
            title: 'Rise of the Elements',
            subtitle: 'Full-Stack Event Website with CI/CD',
            description:
                'A comprehensive event management platform built with React, featuring a complete CI/CD pipeline using GitHub Actions and Docker. Implements automated testing, building, and deployment workflows with containerization best practices. Demonstrates DevOps expertise through infrastructure-as-code, continuous integration, and automated deployment strategies.',
            features: [
                '🚀 Full CI/CD pipeline with GitHub Actions',
                '🐳 Docker containerization with multi-stage builds',
                '⚙️ Automated testing and deployment',
                '📱 Responsive React frontend',
            ],
            techStack: [
                { name: 'React', icon: <SiReact /> },
                { name: 'Docker', icon: <SiDocker /> },
            ],
            github: 'https://github.com/phuongtoVN/rise-of-the-elements',
            demo: '',
            imagePosition: 'right',
        },
        {
            title: 'Kitchen Alchemy',
            subtitle: 'Social Recipe Sharing Platform',
            description:
                'A full-stack social platform for recipe sharing and discovery. Led front-end development with Bootstrap and JavaScript, creating intuitive interfaces for recipe creation, browsing, and ingredient input. Collaborated on backend integration with Node.js, Express, MySQL, and Sequelize for persistent data storage. Features user authentication and email notifications.',
            features: [
                '👥 Social recipe sharing and discovery',
                '📧 Email notifications with Nodemailer',
                '🔐 User authentication system',
                '🎨 Clean, responsive UI with Bootstrap',
            ],
            techStack: [
                { name: 'Bootstrap', icon: <SiBootstrap /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Express', icon: <SiExpress /> },
                { name: 'MySQL', icon: <SiMysql /> },
            ],
            github: 'https://github.com/Zed-CSP/codeConnoisseurs',
            demo: '',
            imagePosition: 'left',
        },
    ];

    return (
        <section
            id="projects"
            ref={ref}
            className="relative"
            style={{ 
                background: '#0a0514',
                paddingTop: '120px',
                paddingBottom: '120px'
            }}
        >
            <div className="container mx-auto px-4">
                {/* Section Title - INCREASED BOTTOM MARGIN */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient-text"
                    style={{ marginBottom: '100px' }}
                >
                    FEATURED PROJECTS
                </motion.h2>

                {/* Projects - INCREASED SPACING BETWEEN PROJECTS */}
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`grid md:grid-cols-2 gap-12 items-center ${
                                project.imagePosition === 'right' ? 'md:grid-flow-dense' : ''
                            }`}
                        >
                            {/* Screenshot/Mockup */}
                            <div
                                className={`${
                                    project.imagePosition === 'right' ? 'md:col-start-2' : ''
                                }`}
                            >
                                <div className="glass-card p-6 aspect-video flex items-center justify-center">
                                    {/* Placeholder - Replace with actual screenshots */}
                                    <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                                        <span className="text-4xl font-bold text-white opacity-50">
                                            {project.title}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content - INCREASED SPACING */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                                {/* Title - INCREASED BOTTOM MARGIN */}
                                <h3 
                                    className="text-3xl font-bold text-white"
                                    style={{ marginBottom: '8px' }}
                                >
                                    {project.title}
                                </h3>
                                
                                {/* Subtitle - INCREASED BOTTOM MARGIN */}
                                <h4 
                                    className="text-xl text-pink-400"
                                    style={{ marginBottom: '12px' }}
                                >
                                    {project.subtitle}
                                </h4>
                                
                                {/* Description - INCREASED BOTTOM MARGIN */}
                                <p 
                                    className="text-gray-300 leading-loose text-base md:text-lg"
                                    style={{ marginBottom: '12px' }}
                                >
                                    {project.description}
                                </p>

                                {/* Features - INCREASED SPACING */}
                                <ul className="space-y-4">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="text-gray-400 text-sm md:text-base">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack - INCREASED GAP AND PADDING */}
                                <div className="flex flex-wrap gap-5">
                                    {project.techStack.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 bg-purple-900/30 rounded-lg border border-pink-500/30 hover:border-pink-500/50 transition-all"
                                            style={{ padding: '10px 16px' }}
                                        >
                                            <span className="text-pink-400 text-xl">{tech.icon}</span>
                                            <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Links - INCREASED TOP PADDING AND GAP */}
                                <div 
                                    className="flex gap-5"
                                    style={{ paddingTop: '20px' }}
                                >
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 btn-secondary"
                                        style={{ padding: '14px 28px' }}
                                    >
                                        <FaGithub />
                                        <span>GitHub</span>
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 btn-primary"
                                            style={{ padding: '14px 28px' }}
                                        >
                                            <FaExternalLinkAlt />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;