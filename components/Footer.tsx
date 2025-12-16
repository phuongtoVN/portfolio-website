'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
        <footer 
            className="bg-black relative"
            style={{ 
                paddingTop: '80px',
                paddingBottom: '60px'
            }}
        >
            <div className="container mx-auto px-4">
                {/* Back to Top Button */}
                <motion.button
                    onClick={scrollToTop}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-pink-500/50 transition-all"
                    style={{ padding: '18px' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Back to top"
                >
                    <FaArrowUp className="text-2xl" />
                </motion.button>

                <div 
                    className="text-center"
                    style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '50px',
                        marginTop: '40px'
                    }}
                >
                    {/* Social Links - INCREASED GAP */}
                    <div className="flex justify-center gap-12 md:gap-16">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-4xl md:text-5xl text-gray-400 hover:text-pink-500 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Tech Stack - INCREASED SPACING */}
                    <div 
                        className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-gray-400 text-sm md:text-base"
                        style={{ padding: '0 20px' }}
                    >
                        <span>Made with</span>
                        <FaHeart className="text-pink-500 animate-pulse text-lg" />
                        <span>using</span>
                        <div className="flex items-center gap-2">
                            <SiNextdotjs className="text-xl" />
                            <span>Next.js</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-2">
                            <SiReact className="text-xl" />
                            <span>React</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-2">
                            <SiTypescript className="text-xl" />
                            <span>TypeScript</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-2">
                            <SiTailwindcss className="text-xl" />
                            <span>Tailwind</span>
                        </div>
                    </div>

                    {/* Copyright - INCREASED TOP SPACING */}
                    <div 
                        className="text-gray-500 text-sm md:text-base"
                        style={{ marginTop: '20px' }}
                    >
                        <p>Designed & Built by Phuong To © {new Date().getFullYear()}</p>
                        <p className="text-gray-600 text-xs md:text-sm mt-3">
                            All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;