"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    className="w-full h-full object-cover opacity-60 pointer-events-none"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Gradient Overlay - darker to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/20 text-sm tracking-wide text-gray-300 backdrop-blur-sm">
                        Bugless Digital Agency
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tighter mb-8"
                >
                    Markanız İçin <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                        Kusursuz Dijital Çözümler
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
                >
                    Modern web tasarım, e-ticaret, SEO ve marka yönetimi hizmetleriyle işinizi dijital dünyada bir adım öne taşıyoruz.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <Link
                        href="/iletisim"
                        className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:pr-12"
                    >
                        <span className="relative z-10">Projeye Başla</span>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                            <ArrowRight size={20} />
                        </div>
                    </Link>

                    <Link
                        href="/hizmetlerimiz"
                        className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        Hizmetlerimiz
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
