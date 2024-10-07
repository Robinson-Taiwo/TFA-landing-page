"use client"

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react'; // Icons for the hamburger menu

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="flex items-center justify-center" >

            <div className="w-screen max-w-5xl  flex justify-between items-center px-6 py-5 border-b">
                <div className="text-2xl text-primary font-semibold">
                    The Fellowship App
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-row items-center text-gray-500">
                    <button className="px-6 hover:text-primary">Features</button>
                    <button className="px-6 hover:text-primary border-x border-x-gray-300">
                        How it works
                    </button>
                    <button className="px-6 hover:text-primary border-r border-r-gray-300">
                        Pricing
                    </button>
                    <button className="px-6 hover:text-primary">Case studies</button>
                </div>

                <Button variant="default" className="hidden lg:block">
                    Download Now
                </Button>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10 flex flex-col items-center py-4">
                        <button className="px-6 py-2 hover:text-primary">Features</button>
                        <button className="px-6 py-2 hover:text-primary">How it works</button>
                        <button className="px-6 py-2 hover:text-primary">Pricing</button>
                        <button className="px-6 py-2 hover:text-primary">Case studies</button>
                        <Button variant="default" className="mt-4">
                            Download Now
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
