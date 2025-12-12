'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDocker, FaReact, FaApple } from 'react-icons/fa';
import { SiKubernetes, SiGithubactions, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const experiences = [
        {
            company: 'OEE IntelliSuite',
            logo: <FaDocker className="text-4xl" />,
            title: 'Junior DevOps Engineer',
            duration: 'April 2025 – Present',
            location: 'Wisconsin (Remote)',
            achievements: [
                'Architected CI/CD pipelines using GitHub Actions and Azure DevOps with reusable YAML templates, streamlining deployment across multiple Next.js applications',
                'Engineered production-grade Docker containers with multi-stage builds and orchestrated deployments using Kubernetes and Rancher',
                'Managed high-availability infrastructure across dev and production environments with cluster configuration, deployment manifests, and ingress controllers',
            ],
            techStack: [
                { name: 'GitHub Actions', icon: <SiGithubactions /> },
                { name: 'Azure DevOps', icon: <VscAzureDevops /> },
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'Kubernetes', icon: <SiKubernetes /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
            ],
        },
        {
            company: 'University of Washington',
            logo: <FaReact className="text-4xl" />,
            title: 'Campus Traditions Programmer',
            duration: 'August 2024 – June 2025',
            location: 'Bothell, WA',
            achievements: [
                'Developed full-stack event management platform using React.js and TypeScript, serving 400-600 students per event',
                'Designed responsive UI/UX interfaces and deployed via GitHub Pages with custom domain configuration',
                'Led event coordination including budget management, vendor relations, and marketing strategies',
            ],
            techStack: [
                { name: 'React', icon: <FaReact /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
            ],
        },
        {
            company: 'Apple Inc.',
            logo: <FaApple className="text-4xl" />,
            title: 'Technical Specialist',
            duration: 'August 2022 – July 2023',
            location: 'Tukwila, WA',
            achievements: [
                'Diagnosed and resolved hardware issues on Apple devices through systematic testing',
                'Provided technical guidance and troubleshooting for customer software issues',
            ],
            techStack: [],
        },
    ];

    return (
        <section
            id="experience"
            ref={ref}
            className="relative"
            style={{ 
                background: 'linear-gradient(180deg, #140a1f 0%, #0a0514 100%)',
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
                    style={{ marginBottom: '80px' }}
                >
                    WORK EXPERIENCE
                </motion.h2>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-500"></div>

                    {/* Experience Cards - DRAMATICALLY INCREASED GAP */}
                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative group"
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute -left-2.5 top-6 w-5 h-5 bg-pink-500 rounded-full border-4 border-purple-900 pulse-glow z-10 group-hover:scale-125 transition-transform"></div>

                                {/* Compact Card - INCREASED PADDING */}
                                <div 
                                    className="ml-0 md:ml-12 glass-card cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20"
                                    style={{ padding: '30px' }}
                                >
                                    {/* Header - Always Visible */}
                                    <div className="flex items-center gap-6">
                                        {/* Logo */}
                                        <div className="text-pink-500 flex-shrink-0 transition-transform group-hover:scale-110">
                                            {exp.logo}
                                        </div>

                                        {/* Basic Info */}
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">
                                                {exp.company}
                                            </h3>
                                            <h4 className="text-base md:text-lg text-pink-400 mb-1">
                                                {exp.title}
                                            </h4>
                                            <p className="text-sm text-gray-400">
                                                {exp.duration} | {exp.location}
                                            </p>
                                        </div>

                                        {/* Hover Indicator */}
                                        <div className="text-gray-500 text-sm hidden md:block group-hover:text-pink-400 transition-colors">
                                            Hover for details →
                                        </div>
                                    </div>

                                    {/* Expandable Details - Show on Hover */}
                                    <div className="max-h-0 opacity-0 group-hover:max-h-[1000px] group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 ease-in-out overflow-hidden">
                                        {/* Divider */}
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent mb-6"></div>

                                        {/* Achievements */}
                                        <div className="mb-6">
                                            <h5 className="text-pink-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                                                Key Achievements
                                            </h5>
                                            <ul className="space-y-3">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-sm text-gray-300 flex items-start leading-relaxed">
                                                        <span className="text-pink-500 mr-3 mt-1 flex-shrink-0">▹</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack */}
                                        {exp.techStack.length > 0 && (
                                            <div>
                                                <h5 className="text-pink-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                                                    Technologies Used
                                                </h5>
                                                <div className="flex flex-wrap gap-3">
                                                    {exp.techStack.map((tech, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex items-center gap-2 bg-purple-900/40 px-4 py-2 rounded-lg border border-pink-500/30 hover:border-pink-500/60 hover:bg-purple-900/60 transition-all"
                                                        >
                                                            <span className="text-pink-400 text-lg">{tech.icon}</span>
                                                            <span className="text-gray-300 text-xs font-medium">{tech.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobile Tap Indicator */}
                                    <div className="mt-4 text-center text-gray-500 text-xs md:hidden group-hover:hidden">
                                        Tap to view details
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* REMOVED: Helper Text */}
            </div>
        </section>
    );
};

export default Experience;