'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '@/data';
import { useScrollDirection } from '@/hooks';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const pathname = usePathname();
    const { scrollY } = useScrollDirection();
    const [isOpen, setIsOpen] = useState(false);
    const isScrolled = scrollY > 50;

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${!isScrolled
                ? 'bg-transparent py-4 md:py-6'
                : 'bg-white/80 backdrop-blur-xl border-b border-olive-900/5 shadow-sm py-3'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm 
                            ${!isScrolled
                                ? 'bg-olive-900 text-cream-50'
                                : 'bg-olive-900 text-cream-50'}`}>
                            <span className="text-lg font-bold font-serif">T</span>
                        </div>
                        <span className={`text-2xl font-serif font-medium tracking-tight transition-colors duration-300 text-olive-900`}>
                            Thinkery
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex items-center gap-1 p-1 rounded-full border transition-all duration-300
                        ${!isScrolled
                            ? 'bg-white/50 backdrop-blur-md border-olive-900/5 shadow-sm'
                            : 'bg-transparent border-transparent shadow-none'}`}>
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative ${pathname === item.href
                                    ? 'text-olive-900 font-semibold'
                                    : 'text-olive-700 hover:text-olive-950 hover:bg-olive-900/5'
                                    }`}
                            >
                                {item.label}
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-white rounded-full shadow-sm -z-10 border border-olive-900/5"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            asChild
                            className={`rounded-full px-6 py-5 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                                ${!isScrolled
                                    ? 'bg-olive-900 text-cream-50 hover:bg-olive-800'
                                    : 'bg-olive-900 text-cream-50 hover:bg-olive-800'}`}
                        >
                            <Link href="/contact">Visit Us</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <button
                                className={`p-2.5 rounded-full transition-all duration-300 ${!isScrolled
                                    ? 'bg-white/50 backdrop-blur-md text-olive-900 border border-olive-900/10'
                                    : 'bg-olive-50 text-olive-900'}`}
                                aria-label="Open menu"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-full sm:w-[400px] bg-cream-50/95 backdrop-blur-xl border-l border-white/50 p-0 overflow-hidden"
                        >
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-fluted opacity-[0.03] pointer-events-none" />
                            <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                            <div className="flex flex-col h-full relative z-10">
                                {/* Mobile Logo */}
                                <div className="flex items-center justify-between p-6 pt-8 border-b border-olive-900/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-olive-900 flex items-center justify-center shadow-lg shadow-olive-900/10">
                                            <span className="text-cream-50 text-lg font-bold font-serif">T</span>
                                        </div>
                                        <span className="text-2xl font-serif font-medium text-olive-900">
                                            Thinkery
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2.5 rounded-full bg-white/50 hover:bg-olive-900/10 text-olive-900 transition-all duration-300 active:scale-90"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Mobile Nav Links */}
                                <div className="flex flex-col p-6 gap-2">
                                    {NAV_ITEMS.map((item, index) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.1 + index * 0.1,
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center justify-between px-6 py-5 rounded-2xl text-lg font-serif transition-all duration-300 border border-transparent ${pathname === item.href
                                                    ? 'bg-white shadow-lg shadow-olive-900/5 border-olive-900/5 font-medium text-olive-900 translate-x-2'
                                                    : 'text-olive-700 hover:bg-white/60 hover:translate-x-1'
                                                    }`}
                                            >
                                                {item.label}
                                                {pathname === item.href && (
                                                    <span className="w-1.5 h-1.5 rounded-full bg-olive-500" />
                                                )}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Mobile CTA */}
                                <motion.div
                                    className="mt-auto p-8 border-t border-olive-900/5 bg-white/40 backdrop-blur-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Button
                                        asChild
                                        className="w-full h-14 bg-olive-900 hover:bg-olive-800 text-cream-50 rounded-2xl text-lg font-medium shadow-xl shadow-olive-900/10 transition-transform active:scale-95"
                                    >
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                                            Visit Us
                                        </Link>
                                    </Button>
                                    <p className="text-center text-olive-400 text-xs mt-6 uppercase tracking-widest font-medium">
                                        Calicut • Kerala
                                    </p>
                                </motion.div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    );
}
