
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { servicesData, startupsData } from "@/lib/data";

const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    {
        name: "Hizmetlerimiz",
        href: "/hizmetlerimiz",
        hasDropdown: true,
        dropdownItems: servicesData.map(s => ({ name: s.shortTitle, href: s.href }))
    },
    {
        name: "Referanslar",
        href: "/referanslar",
        hasDropdown: true,
        dropdownItems: [
            { name: "Website Referansları", href: "/referanslar/website-referanslari" },
            { name: "Sosyal Medya Referansları", href: "/referanslar/sosyal-medya-referanslari" },
            { name: "Reklam Yönetimi Referansları", href: "/referanslar/reklam-yonetimi-referanslari" },
            { name: "CRM Referansları", href: "/referanslar/crm-referanslari" },
        ]
    },
    {
        name: "Startuplar",
        href: "/startuplar",
        hasDropdown: true,
        dropdownItems: startupsData.map(s => ({ name: s.name, href: s.href }))
    },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 shadow-sm">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                <Link href="/" className="z-50 relative group">
                    {/* Ghost logo for spacing */}
                    <img
                        src="/logo.png"
                        alt="Bugless Digital Logo"
                        className="h-[84px] w-auto object-contain opacity-0"
                    />
                    {/* Actual enlarged logo */}
                    <img
                        src="/logo.png"
                        alt="Bugless Digital Logo"
                        className="h-[168px] w-auto object-contain absolute top-1/2 left-0 -translate-y-1/2 max-w-none transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-8 items-center" onMouseLeave={() => setHoveredIndex(null)}>
                    {navItems.map((item, index) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "relative text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 py-4 overflow-hidden",
                                    hoveredIndex === index ? "text-white" : "text-gray-400 hover:text-white"
                                )}
                            >
                                <span className="relative z-10">{item.name}</span>
                                {item.hasDropdown && <ChevronDown size={14} className={cn("transition-transform duration-200 relative z-10", hoveredIndex === index && "rotate-180")} />}

                                <span className={cn(
                                    "absolute bottom-2 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ease-out",
                                    hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                                )} />
                            </Link>

                            {/* Desktop Dropdown */}
                            {item.hasDropdown && (
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, clipPath: "inset(0% 0% 100% 0%)" }}
                                            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
                                            exit={{ opacity: 0, y: 10, clipPath: "inset(0% 0% 100% 0%)" }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full -left-4 w-64 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col gap-1 overflow-hidden"
                                        >
                                            {item.dropdownItems?.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white p-2 z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-black pt-24 px-6 overflow-y-auto lg:hidden"
                    >
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item, index) => (
                                <div key={item.name} className="border-b border-white/5 last:border-0">
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={item.href}
                                            onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                                            className="block py-4 text-xl font-medium text-gray-300 hover:text-white"
                                        >
                                            {item.name}
                                        </Link>
                                        {item.hasDropdown && (
                                            <button
                                                onClick={() => setMobileExpandedIndex(mobileExpandedIndex === index ? null : index)}
                                                className="p-4 text-white"
                                            >
                                                <ChevronDown size={20} className={cn("transition-transform", mobileExpandedIndex === index && "rotate-180")} />
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Dropdown */}
                                    <AnimatePresence>
                                        {item.hasDropdown && mobileExpandedIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-white/5 rounded-lg mb-4"
                                            >
                                                {item.dropdownItems?.map(subItem => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block px-6 py-3 text-gray-400 hover:text-white"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
