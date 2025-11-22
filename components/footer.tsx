import { Twitter, Github, Youtube, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="border-t border-[#111] bg-[#050505] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-black text-white tracking-tighter">100xDevs</h3>
                        <p className="text-gray-500 text-sm mt-2 max-w-xs">
                            Built by Harkirat Singh for the outliers of tomorrow.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Youtube size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs text-gray-800">
                    &copy; {new Date().getFullYear()} 100xDevs. All rights reserved. Code is Law.
                </div>
            </div>
        </footer>
    );
};