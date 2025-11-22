'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Contact', href: '/contact' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                        <div className="relative h-14 w-48 overflow-hidden rounded-lg">
                            <NextImage
                                src="/logo.png"
                                alt="DukaaOn"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`relative text-sm font-medium transition-colors duration-300 ${isActive(item.href)
                                ? 'text-primary'
                                : 'text-neutral-600 hover:text-primary'
                                }`}
                        >
                            {item.name}
                            {isActive(item.href) && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* CTA Button - Desktop */}
                <div className="hidden md:flex md:flex-1 md:justify-end">
                    <Button
                        variant="primary"
                        size="md"
                        className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
                        asChild
                    >
                        <Link href="/marketplace">
                            Explore Marketplace
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* Mobile menu button */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full p-2 text-neutral-600 hover:bg-neutral-100 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100"
                    >
                        <div className="space-y-1 px-4 pb-6 pt-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${isActive(item.href)
                                        ? 'bg-primary/5 text-primary'
                                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary'
                                        }`}
                                >
                                    <span className="flex items-center justify-between w-full">
                                        {item.name}
                                        {isActive(item.href) && <ChevronRight className="h-4 w-4" />}
                                    </span>
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-neutral-100">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full justify-center shadow-lg shadow-primary/20"
                                    asChild
                                >
                                    <Link href="/marketplace" onClick={() => setMobileMenuOpen(false)}>
                                        Explore Marketplace
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
