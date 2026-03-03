"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { useState, useEffect } from "react";
import { storage, StartupItem } from "@/lib/storage";
import { startupsData } from "@/lib/data";
import { useParams, notFound } from "next/navigation";
import { Rocket, Zap, Code } from "lucide-react";
import { motion } from "framer-motion";

type StartupDetail = StartupItem & {
    fullDescription?: string;
    features?: string[];
    techStack?: string[];
};

export default function StartupDetailPage() {
    const { slug } = useParams();
    const [startup, setStartup] = useState<StartupDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1) Check localStorage first
        const storageStartups = storage.getStartups();
        const fromStorage = storageStartups.find(s => s.id === slug);

        if (fromStorage) {
            setStartup(fromStorage);
        } else {
            // 2) Fall back to static data from lib/data.ts
            const fromData = startupsData.find(s => s.id === slug);
            if (fromData) {
                setStartup({
                    id: fromData.id,
                    name: fromData.name,
                    category: fromData.category,
                    description: fromData.description,
                    status: fromData.status,
                    link: fromData.href || "",
                    image: undefined,
                    fullDescription: fromData.fullDescription,
                    features: fromData.features,
                    techStack: fromData.techStack,
                });
            }
        }

        setLoading(false);
    }, [slug]);

    if (loading) return null;

    if (!startup) {
        notFound();
    }

    const detail = startup as StartupDetail;

    /* ── Laptop Frame Mockup ── */
    const LaptopMockup = ({ image, name }: { image?: string; name: string }) => (
        <div className="relative w-full max-w-[460px] mx-auto flex-shrink-0">
            {/* Screen */}
            <div className="relative rounded-t-xl overflow-hidden border-[8px] border-neutral-800 bg-neutral-800" style={{ aspectRatio: '16/10' }}>
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <div className="ml-3 flex-1 h-4 rounded-sm bg-neutral-600"></div>
                </div>
                {/* Content */}
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-neutral-300">
                        <span className="font-bold text-sm uppercase tracking-widest">{name}</span>
                    </div>
                )}
            </div>
            {/* Hinge */}
            <div className="relative mx-auto">
                <div className="h-3 bg-gradient-to-b from-neutral-700 to-neutral-500 rounded-b-sm mx-[10%]"></div>
                <div className="h-2 bg-gradient-to-b from-neutral-400 to-neutral-300 rounded-b-lg mx-[4%]"></div>
            </div>
        </div>
    );

    return (
        <main className="bg-white">
            <PageHeader
                title={startup.name}
                description={startup.category}
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col gap-12">

                        {/* Hero Card — Laptop Mockup + Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12">
                                {/* Laptop Mockup */}
                                <div className="w-full md:w-[45%] flex-shrink-0">
                                    <LaptopMockup image={startup.image} name={startup.name} />
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-[55%] flex flex-col justify-center">
                                    <div className="mb-4">
                                        <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 tracking-tight">
                                            {startup.name}
                                        </h2>
                                    </div>

                                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                                        {detail.fullDescription || startup.description}
                                    </p>

                                    {startup.link && startup.link !== "#" && !startup.link.startsWith("/") && (
                                        <div>
                                            <a
                                                href={startup.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-bold rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                                            >
                                                Projeyi Ziyaret Et
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Features & Tech Stack */}
                        {(detail.features || detail.techStack) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {detail.features && detail.features.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                                    >
                                        <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
                                            <Zap size={20} /> Özellikler
                                        </h3>
                                        <ul className="space-y-3">
                                            {detail.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0"></span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                                {detail.techStack && detail.techStack.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="bg-black text-white rounded-2xl p-8 border border-gray-800"
                                    >
                                        <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2 text-white">
                                            <Code size={20} className="text-white" /> Teknoloji Yığını
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {detail.techStack.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm font-medium text-neutral-300"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        )}

                        {/* Fallback Info Cards (when no features/techStack) */}
                        {!detail.features && !detail.techStack && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                                >
                                    <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
                                        <Rocket size={20} /> Durum
                                    </h3>
                                    <p className="text-gray-700 font-medium">{startup.status}</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="bg-black text-white rounded-2xl p-8 border border-gray-800"
                                >
                                    <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2 text-white">
                                        <Zap size={20} className="text-white" /> Hızlı Bakış
                                    </h3>
                                    <p className="text-gray-400 font-medium">Bu girişim Bugless Digital bünyesinde geliştirilmiştir.</p>
                                </motion.div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </main>
    );
}
