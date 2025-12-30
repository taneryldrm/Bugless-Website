"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description: string;
    className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
    return (
        <section
            className={`relative pt-44 pb-40 flex items-center justify-center overflow-hidden bg-black text-white ${className}`}
        >
            {/* Slanted Bottom Overlay - Creates the cut effect */}
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
                    className="w-full h-full object-cover opacity-50 pointer-events-none"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-0 pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-display font-bold mb-6"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    {description}
                </motion.p>
            </div>
        </section>
    );
}
