'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            url: 'https://linkedin.com/in/phuong-y-to/',
        },
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: 'https://github.com/phuongtoVN',
        },
        {
            name: 'Email',
            icon: <FaEnvelope />,
            url: 'mailto:phuongto112vn@gmail.com',
        },
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{ paddingTop: '100px', paddingBottom: '100px' }}
        >
            {/* Animated Background Grid */}
            <div className="absolute inset-0 grid-background opacity-20"></div>

            {/* Floating Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Profile Photo - INCREASED BOTTOM MARGIN */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ marginBottom: '60px' }}
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-500 glow-border float-animation">
                            {/* Placeholder - Replace with actual photo */}
                            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                                <span className="text-8xl font-bold text-white">PT</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Greeting - INCREASED BOTTOM MARGIN */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300"
                        style={{ marginBottom: '30px' }}
                    >
                        Hello! I&apos;m
                    </motion.p>

                    {/* Name - INCREASED BOTTOM MARGIN */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text glow-text"
                        style={{ marginBottom: '50px' }}
                    >
                        PHUONG TO
                    </motion.h1>

                    {/* Animated Tagline - INCREASED BOTTOM MARGIN */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-3xl lg:text-4xl text-purple-300 h-12"
                        style={{ marginBottom: '60px' }}
                    >
                        <TypeAnimation
                            sequence={[
                                'DevOps Software Engineer',
                                2000,
                                'Full-Stack Developer',
                                2000,
                                'Cloud Infrastructure Specialist',
                                2000,
                                'CI/CD Pipeline Architect',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>

                    {/* Intro Paragraph - INCREASED BOTTOM MARGIN */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed"
                        style={{ marginBottom: '70px', paddingLeft: '20px', paddingRight: '20px' }}
                    >
                        I design and implement containerized deployment pipelines using Docker,
                        Kubernetes, and GitHub Actions to build scalable, efficient systems.
                        Currently seeking opportunities in{' '}
                        <span className="text-pink-500 font-semibold">DevOps Engineering</span>,{' '}
                        <span className="text-pink-500 font-semibold">Cybersecurity</span>, or{' '}
                        <span className="text-pink-500 font-semibold">Full-Stack Development</span>{' '}
                        where I can leverage automation and modern development practices to solve
                        real-world problems.
                    </motion.p>

                    {/* CTA Buttons - INCREASED BOTTOM MARGIN AND GAP */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-8"
                        style={{ marginBottom: '70px' }}
                    >
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-primary text-lg px-10 py-5"
                        >
                            View My Work
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="btn-secondary text-lg px-10 py-5"
                        >
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Social Icons - INCREASED GAP */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex gap-10"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-4xl text-gray-400 hover:text-pink-500 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-pink-500 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-3 bg-pink-500 rounded-full mt-2"
                    ></motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;