'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const facts = [
        {
            icon: <FaGraduationCap />,
            text: 'B.S. Computer Science - UW Bothell',
        },
        {
            icon: <FaBriefcase />,
            text: 'Junior DevOps Engineer @ OEE IntelliSuite',
        },
        {
            icon: <FaMapMarkerAlt />,
            text: 'Seattle, Washington',
        },
        {
            icon: <FaCertificate />,
            text: 'Full Stack Bootcamp - UC Berkeley',
        },
    ];

    return (
        <section
            id="about"
            ref={ref}
            style={{ 
                background: 'linear-gradient(180deg, #0a0514 0%, #140a1f 100%)',
                paddingTop: '160px',
                paddingBottom: '160px'
            }}
        >
            <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient-text"
                    style={{ marginBottom: '160px' }}
                >
                    ABOUT ME
                </motion.h2>

                <div 
                    className="grid md:grid-cols-2 gap-20 lg:gap-32 items-center"
                    style={{ marginBottom: '200px' }}
                >
                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="w-full max-w-lg aspect-square rounded-3xl overflow-hidden border-4 border-pink-500 glow-border shadow-2xl shadow-pink-500/20">
                            {/* Placeholder - Replace with actual photo */}
                            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                                <span className="text-9xl font-bold text-white opacity-50">PT</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-10"
                    >
                        <h3 
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-500"
                            style={{ marginTop: '40px', marginBottom: '50px' }}
                        >
                            Who I Am
                        </h3>

                        <p className="text-gray-300 text-lg md:text-xl leading-loose">
                            I&apos;m a DevOps Software Engineer with a B.S. in Computer Science from the
                            University of Washington Bothell, with a concentration in Cybersecurity. My
                            journey into tech began with a Full Stack Coding Bootcamp at UC Berkeley,
                            where I discovered my passion for creating secure, efficient systems through
                            automation.
                        </p>

                        <p className="text-gray-300 text-lg md:text-xl leading-loose">
                            Currently, I work as a Junior DevOps Engineer at OEE IntelliSuite, where I
                            design and maintain CI/CD pipelines using GitHub Actions and Azure DevOps. I
                            build and deploy production-grade Docker containers and manage containerized
                            applications with Kubernetes and Rancher, ensuring high availability across
                            development and production environments.
                        </p>

                        <p className="text-gray-300 text-lg md:text-xl leading-loose">
                            I&apos;m passionate about bridging the gap between development and operations
                            through clean code, automation, and DevOps best practices. Whether it&apos;s
                            implementing containerized deployment pipelines or building full-stack
                            applications, I thrive on solving complex problems and optimizing workflows
                            for performance and scalability.
                        </p>
                    </motion.div>
                </div>

                {/* Quick Facts */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ marginTop: '100px' }}
                >
                    <h3 
                        className="text-3xl md:text-4xl font-bold text-center text-purple-300"
                        style={{ marginBottom: '100px' }}
                    >
                        Quick Facts
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                        {facts.map((fact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -8 }}
                                className="glass-card text-center cursor-pointer min-h-[260px] flex flex-col items-center justify-center"
                                style={{ 
                                    padding: '50px 35px',
                                }}
                            >
                                <div 
                                    className="text-6xl md:text-7xl text-pink-500 flex justify-center"
                                    style={{ marginBottom: '40px' }}
                                >
                                    {fact.icon}
                                </div>
                                <p 
                                    className="text-gray-300 text-base md:text-lg leading-relaxed"
                                    style={{ paddingLeft: '20px', paddingRight: '20px' }}
                                >
                                    {fact.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;