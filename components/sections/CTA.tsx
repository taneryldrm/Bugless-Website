"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-sm">
                        <Sparkles size={16} className="text-blue-400" />
                        <span>Projelerinizi Geleceğe Taşıyalım</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
                        Hazır mısınız? <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Birlikte Büyüyelim.
                        </span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Dijital dönüşüm yolculuğunuzda size rehberlik etmek için buradayız.
                        Hemen tanışalım, markanız için en doğru stratejiyi belirleyelim.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/iletisim"
                            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:pr-12 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10">Hemen Başlayın</span>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                                <ArrowRight size={20} />
                            </div>
                        </Link>

                        <Link
                            href="/referanslar"
                            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            Referanslarımız
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
