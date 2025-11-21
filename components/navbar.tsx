'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20 dark:border-white/10 py-3'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm font-bold">100x</span>
                            </div>
                        </motion.div>
                        <span className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
                            Devs
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        <NavLink href="#courses">Courses</NavLink>
                        <NavLink href="#syllabus">Syllabus</NavLink>
                        <NavLink href="#testimonials">Stories</NavLink>
                        <NavLink href="#community">Community</NavLink>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="#login"
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-3 py-2"
                        >
                            Login
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
                        >
                            Join Cohort
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white dark:bg-black border-t border-gray-200/20 dark:border-white/10"
                    >
                        <div className="px-6 py-6 space-y-1">
                            <MobileNavLink href="#courses">Courses</MobileNavLink>
                            <MobileNavLink href="#syllabus">Syllabus</MobileNavLink>
                            <MobileNavLink href="#testimonials">Stories</MobileNavLink>
                            <MobileNavLink href="#community">Community</MobileNavLink>

                            <div className="pt-4 mt-4 border-t border-gray-200/20 dark:border-white/10 space-y-2">
                                <Link
                                    href="login"
                                    className="block w-full text-center py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    Login
                                </Link>
                                <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                    Join Cohort
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="relative px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
    >
        {children}
        <span className="absolute bottom-1 left-3 right-3 h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="block px-3 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-all"
    >
        {children}
    </Link>
);