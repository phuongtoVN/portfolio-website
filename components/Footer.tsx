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
        <footer className="bg-black py-16 relative">
            <div className="container mx-auto px-4">
                {/* Back to Top Button */}
                <motion.button
                    onClick={scrollToTop}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowUp className="text-xl" />
                </motion.button>

                <div className="text-center space-y-8 mt-8">
                    {/* Social Links */}
                    <div className="flex justify-center gap-8">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-gray-400 hover:text-pink-500 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex items-center justify-center gap-3 text-gray-400 text-sm">
                        <span>Made with</span>
                        <FaHeart className="text-pink-500 animate-pulse" />
                        <span>using</span>
                        <div className="flex items-center gap-2">
                            <SiNextdotjs className="text-lg" />
                            <span>Next.js</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                            <SiReact className="text-lg" />
                            <span>React</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                            <SiTypescript className="text-lg" />
                            <span>TypeScript</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                            <SiTailwindcss className="text-lg" />
                            <span>Tailwind</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-500 text-sm">
                        <p>Designed & Built by Phuong To © {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
