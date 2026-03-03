"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { serviceCategories, startupsData } from "@/lib/data";

const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    {
        name: "Hizmetlerimiz",
        href: "/hizmetlerimiz",
        hasDropdown: true,
        dropdownItems: serviceCategories.map(cat => ({
            name: cat.title,
            href: cat.href,
            subItems: cat.subServices.map(sub => ({ name: sub.title, href: sub.href }))
        }))
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
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(null);
    const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
    const [mobileSubExpandedIndex, setMobileSubExpandedIndex] = useState<string | null>(null);

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const [path, hash] = href.split('#');
        if (hash && pathname === path) {
            e.preventDefault();
            const element = document.getElementById(hash);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Close menus
                setIsMobileMenuOpen(false);
                setHoveredIndex(null);
                setHoveredSubCategory(null);
            }
        } else {
            // Let the normal navigation happen for different paths
            setIsMobileMenuOpen(false);
            setHoveredIndex(null);
            setHoveredSubCategory(null);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[9999] bg-black/50 backdrop-blur-xl border-b border-white/5 shadow-sm">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none select-none">
                    <img
                        src="/logo.png"
                        alt=""
                        className="h-[168px] w-auto max-w-[500px] object-contain"
                    />
                </div>

                <Link href="/" className="relative z-[9999] group w-[180px] h-full flex items-center pointer-events-auto">
                    <img
                        src="/logo.png"
                        alt="Bugless Digital Logo"
                        className="h-[84px] w-auto object-contain opacity-0"
                    />
                </Link>

                <nav className="hidden lg:flex gap-8 items-center relative z-[9999] pointer-events-auto">
                    {navItems.map((item, index) => (
                        <div
                            key={item.name}
                            className="relative group/menu"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => {
                                setHoveredIndex(null);
                                setHoveredSubCategory(null);
                            }}
                        >
                            <Link
                                href={item.href}
                                className="relative text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 py-4 text-gray-400 hover:text-white"
                            >
                                <span className="relative z-10">{item.name}</span>
                                {item.hasDropdown && <ChevronDown size={14} className="transition-transform duration-200 relative z-10 group-hover/menu:rotate-180" />}
                                <span className="absolute bottom-2 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover/menu:scale-x-100" />
                            </Link>

                            {item.hasDropdown && (
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full -left-4 w-72 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col gap-1 overflow-hidden"
                                        >
                                            {item.dropdownItems?.map((subItem: any) => (
                                                <div
                                                    key={subItem.name}
                                                    className="relative"
                                                    onMouseEnter={() => setHoveredSubCategory(subItem.name)}
                                                >
                                                    <div className="flex items-center justify-between px-4 py-1 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors group/subitem">
                                                        <Link
                                                            href={subItem.href}
                                                            onClick={(e) => handleAnchorClick(e, subItem.href)}
                                                            className="flex-grow py-2"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                        {subItem.subItems && (
                                                            <button
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    setHoveredSubCategory(hoveredSubCategory === subItem.name ? null : subItem.name);
                                                                }}
                                                                className="p-2 -mr-2"
                                                            >
                                                                <ChevronDown
                                                                    size={14}
                                                                    className={cn(
                                                                        "transition-transform duration-200 opacity-50 group-hover/subitem:opacity-100",
                                                                        hoveredSubCategory === subItem.name && "rotate-180"
                                                                    )}
                                                                />
                                                            </button>
                                                        )}
                                                    </div>

                                                    {subItem.subItems && (
                                                        <AnimatePresence>
                                                            {hoveredSubCategory === subItem.name && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    className="overflow-hidden flex flex-col gap-1 bg-white/[0.02] rounded-lg mx-1"
                                                                >
                                                                    {subItem.subItems.map((tierItem: any) => (
                                                                        <Link
                                                                            key={tierItem.name}
                                                                            href={tierItem.href}
                                                                            onClick={(e) => handleAnchorClick(e, tierItem.href)}
                                                                            className="block px-8 py-2.5 text-xs text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                                        >
                                                                            {tierItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    )}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </nav>

                <button
                    className="lg:hidden text-white p-2 z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

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
                                            onClick={(e) => {
                                                if (item.hasDropdown) {
                                                    e.preventDefault();
                                                    setMobileExpandedIndex(mobileExpandedIndex === index ? null : index);
                                                } else {
                                                    setIsMobileMenuOpen(false);
                                                }
                                            }}
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

                                    <AnimatePresence>
                                        {item.hasDropdown && mobileExpandedIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-white/5 rounded-lg mb-4"
                                            >
                                                {item.dropdownItems?.map((subItem: any) => (
                                                    <div key={subItem.name} className="border-b border-white/5 last:border-0 pb-1">
                                                        <div className="flex items-center justify-between">
                                                            <Link
                                                                href={subItem.href}
                                                                onClick={(e) => {
                                                                    if (subItem.subItems) {
                                                                        e.preventDefault();
                                                                        setMobileSubExpandedIndex(mobileSubExpandedIndex === subItem.name ? null : subItem.name);
                                                                    } else {
                                                                        handleAnchorClick(e, subItem.href);
                                                                    }
                                                                }}
                                                                className="block px-6 py-3 text-gray-400 hover:text-white"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                            {subItem.subItems && (
                                                                <button
                                                                    onClick={() => setMobileSubExpandedIndex(mobileSubExpandedIndex === subItem.name ? null : subItem.name)}
                                                                    className="p-3 text-gray-400"
                                                                >
                                                                    <ChevronDown size={16} className={cn("transition-transform", mobileSubExpandedIndex === subItem.name && "rotate-180")} />
                                                                </button>
                                                            )}
                                                        </div>

                                                        {subItem.subItems && (
                                                            <AnimatePresence>
                                                                {mobileSubExpandedIndex === subItem.name && (
                                                                    <motion.div
                                                                        initial={{ height: 0, opacity: 0 }}
                                                                        animate={{ height: "auto", opacity: 1 }}
                                                                        exit={{ height: 0, opacity: 0 }}
                                                                        className="bg-white/5 mx-4 mb-2 rounded-lg"
                                                                    >
                                                                        {subItem.subItems.map((tierItem: any) => (
                                                                            <Link
                                                                                key={tierItem.name}
                                                                                href={tierItem.href}
                                                                                onClick={(e) => handleAnchorClick(e, tierItem.href)}
                                                                                className="block px-6 py-3 text-sm text-gray-500 hover:text-white"
                                                                            >
                                                                                {tierItem.name}
                                                                            </Link>
                                                                        ))}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        )}
                                                    </div>
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

export type NavItem = {
    name: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: {
        name: string;
        href: string;
        subItems?: { name: string; href: string }[];
    }[];
};
