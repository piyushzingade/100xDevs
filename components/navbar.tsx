'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (typeof window === 'undefined') return;
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-black/85 backdrop-blur-sm py-3 shadow-[0_10px_30px_rgba(2,6,23,0.6)]' : 'bg-transparent py-4'}
      `}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group"
                        aria-label="Homepage — 100xDevs"
                    >
                        <div
                            aria-hidden
                            className="w-9 h-9 rounded-lg flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-600 shadow-md transform transition-transform duration-200 group-hover:scale-105"
                        >
                            <Code2 className="w-5 h-5 text-white" />
                        </div>

                        <span className="text-lg font-semibold text-white tracking-tight">100xDevs</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">
                        <NavLink href="#features">Features</NavLink>
                        <NavLink href="#how-it-works">How it works</NavLink>
                        <NavLink href="#pricing">Pricing</NavLink>
                        <NavLink href="#faqs">FAQs</NavLink>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="#login"
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-2 rounded-md"
                        >
                            Login
                        </Link>

                        <Link
                            href="#signup"
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-black font-semibold shadow-sm hover:translate-y-px transition-transform"
                        >
                            Signup
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen((s) => !s)}
                        className="md:hidden p-2 text-white/80 hover:text-white transition-colors rounded-md"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                        type="button"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (animated via CSS) */}
            <div
                className={`md:hidden origin-top transition-[max-height,opacity,transform] duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
          ${isMobileMenuOpen ? 'max-h-screen opacity-100 transform scale-y-100' : 'max-h-0 opacity-0 transform scale-y-95'}
          overflow-hidden bg-black/95 border-t border-white/6
        `}
            >
                <div className="px-6 py-5 space-y-1">
                    <MobileNavLink href="#features" onClose={() => setIsMobileMenuOpen(false)}>
                        Features
                    </MobileNavLink>
                    <MobileNavLink href="#how-it-works" onClose={() => setIsMobileMenuOpen(false)}>
                        How it works
                    </MobileNavLink>
                    <MobileNavLink href="#pricing" onClose={() => setIsMobileMenuOpen(false)}>
                        Pricing
                    </MobileNavLink>
                    <MobileNavLink href="#faqs" onClose={() => setIsMobileMenuOpen(false)}>
                        FAQs
                    </MobileNavLink>

                    <div className="pt-4 mt-4 border-t border-white/6 space-y-3">
                        <Link
                            href="#login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center py-2.5 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md"
                        >
                            Login
                        </Link>

                        <Link
                            href="#signup"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center bg-white text-black py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-2 rounded-md"
    >
        {children}
    </Link>
);

const MobileNavLink = ({ href, children, onClose }: { href: string; children: React.ReactNode; onClose?: () => void }) => (
    <Link
        href={href}
        onClick={onClose}
        className="block px-3 py-2.5 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
    >
        {children}
    </Link>
);
