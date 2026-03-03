"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description: string;
    className?: string;
    breadcrumb?: React.ReactNode;
    ctaText?: string;
    ctaHref?: string;
    ctaDescription?: string;
}

export function PageHeader({
    title,
    description,
    className,
    breadcrumb,
    ctaText,
    ctaHref,
    ctaDescription
}: PageHeaderProps) {
    return (
        <section
            className={`relative min-h-[85vh] -mt-20 pt-40 pb-24 md:pb-32 flex flex-col overflow-hidden bg-black text-white ${className}`}
        >
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}
            />

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full z-0" />

            {/* Slanted Bottom Overlay */}
            {/* Transparent/Glassy Wedge (Layered visual effect) */}
            <div
                className="absolute bottom-0 left-0 right-0 h-10 md:h-16 bg-white/20 backdrop-blur-md z-20 pointer-events-none"
                style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
            />

            {/* Solid White Wedge (Main cut) - Further reduced height for very subtle slant */}
            <div
                className="absolute bottom-0 left-0 right-0 h-4 md:h-10 bg-white z-20 pointer-events-none"
                style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
            />
            {/* Video Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    className="w-full h-full object-cover opacity-40 pointer-events-none"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col flex-grow">
                {breadcrumb && (
                    <div className="mb-8 md:mb-12 text-left">
                        <div className="inline-flex items-center text-[14px] font-medium text-gray-400">
                            {breadcrumb}
                        </div>
                    </div>
                )}

                <div className="flex-grow flex flex-col items-center justify-center text-center py-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        {description}
                    </motion.p>

                    {(ctaText && ctaHref) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <a
                                href={ctaHref}
                                className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-xl"
                            >
                                {ctaText}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            {ctaDescription && (
                                <p className="text-gray-500 text-sm max-w-xl mx-auto italic">
                                    {ctaDescription}
                                </p>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
