'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaDownload } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [copiedText, setCopiedText] = useState('');

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'phuongto112vn@gmail.com',
            link: 'mailto:phuongto112vn@gmail.com',
            copyable: true,
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/phuong-y-to/',
            link: 'https://linkedin.com/in/phuong-y-to/',
            copyable: false,
        },
        {
            icon: <FaGithub />,
            label: 'GitHub',
            value: 'github.com/phuongtoVN',
            link: 'https://github.com/phuongtoVN',
            copyable: false,
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'Seattle, Washington',
            link: '',
            copyable: false,
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+1 (570) 640-1300',
            link: 'tel:+15706401300',
            copyable: true,
        },
    ];

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(''), 2000);
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="relative overflow-hidden"
            style={{ 
                background: 'linear-gradient(180deg, #0a0514 0%, #140a1f 100%)',
                paddingTop: '120px',
                paddingBottom: '120px'
            }}
        >
            {/* Glowing Orb at Bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title - INCREASED BOTTOM MARGIN */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient-text"
                    style={{ marginBottom: '60px' }}
                >
                    LET&apos;S CONNECT
                </motion.h2>

                {/* Opening Text - INCREASED BOTTOM MARGIN */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center max-w-3xl mx-auto"
                    style={{ 
                        marginBottom: '80px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}
                >
                    <p className="text-lg md:text-xl text-gray-300 leading-loose">
                        I&apos;m currently open to new opportunities in{' '}
                        <span className="text-pink-400 font-semibold">DevOps Engineering</span>,{' '}
                        <span className="text-pink-400 font-semibold">Full-Stack Development</span>,{' '}
                        <span className="text-pink-400 font-semibold">Cybersecurity</span>, and{' '}
                        <span className="text-pink-400 font-semibold">Software Engineering</span>.
                        Whether you have a project in mind, want to collaborate, or just want to chat
                        about tech, feel free to reach out!
                    </p>
                </motion.div>

                {/* Contact Cards - INCREASED BOTTOM MARGIN AND GAP */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
                    style={{ marginBottom: '80px' }}
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-card text-center relative group cursor-pointer"
                            style={{ padding: '40px 30px' }}
                            onClick={() => {
                                if (info.copyable) {
                                    handleCopy(info.value);
                                } else if (info.link) {
                                    window.open(info.link, '_blank');
                                }
                            }}
                        >
                            {/* Icon - INCREASED BOTTOM MARGIN */}
                            <div 
                                className="text-5xl md:text-6xl text-pink-400 flex justify-center"
                                style={{ marginBottom: '28px' }}
                            >
                                {info.icon}
                            </div>
                            
                            {/* Label - INCREASED BOTTOM MARGIN */}
                            <h3 
                                className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wide"
                                style={{ marginBottom: '16px' }}
                            >
                                {info.label}
                            </h3>
                            
                            {/* Value */}
                            <p className="text-white text-sm md:text-base break-all leading-relaxed">
                                {info.value}
                            </p>
                            
                            {info.copyable && copiedText === info.value && (
                                <span className="absolute top-3 right-3 text-xs text-green-400 font-semibold">
                                    ✓ Copied!
                                </span>
                            )}
                            {info.copyable && copiedText !== info.value && (
                                <span className="absolute top-3 right-3 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Click to copy
                                </span>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Resume Download Button - INCREASED BOTTOM MARGIN */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                    style={{ marginBottom: '70px' }}
                >
                    <a
                        href="/resume.pdf"
                        download
                        className="btn-primary text-lg md:text-xl inline-flex items-center gap-3"
                        style={{ padding: '18px 48px' }}
                    >
                        <FaDownload />
                        Download My Resume
                    </a>
                </motion.div>

                {/* Social Links - INCREASED GAP */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex justify-center gap-12"
                >
                    <motion.a
                        href="https://linkedin.com/in/phuong-y-to/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-5xl md:text-6xl text-gray-400 hover:text-pink-500 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="https://github.com/phuongtoVN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-5xl md:text-6xl text-gray-400 hover:text-pink-500 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="mailto:phuongto112vn@gmail.com"
                        className="text-5xl md:text-6xl text-gray-400 hover:text-pink-500 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaEnvelope />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;