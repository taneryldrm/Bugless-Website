"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { useState, useEffect } from "react";
import { storage, StartupItem } from "@/lib/storage";
import { startupsData } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StartupsPage() {
    const [startups, setStartups] = useState<StartupItem[]>([]);

    useEffect(() => {
        const fromStorage = storage.getStartups();
        if (fromStorage.length > 0) {
            setStartups(fromStorage);
        } else {
            // Fallback to static data
            setStartups(startupsData.map(s => ({
                id: s.id,
                name: s.name,
                category: s.category,
                description: s.description,
                status: s.status,
                link: s.href || "",
                image: undefined,
            })));
        }
    }, []);


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

    /* ── Static phone images for specific startups ── */
    const phoneImageMap: Record<string, string> = {
        "Play My Jam": "/images/playmyjam-phone.png",
    };

    /* ── Startup Card ── */
    const StartupCard = ({ startup, index }: { startup: StartupItem; index: number }) => {
        const isReversed = index % 2 !== 0;
        const staticPhoneImage = phoneImageMap[startup.name];

        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
                <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 p-8 md:p-12`}>
                    {/* Mockup */}
                    <div className="w-full md:w-[45%] flex-shrink-0">
                        {staticPhoneImage ? (
                            <div className="flex items-center justify-center">
                                <img
                                    src={staticPhoneImage}
                                    alt={startup.name}
                                    className="w-[340px] md:w-[440px] h-auto object-contain"
                                />
                            </div>
                        ) : (
                            <LaptopMockup image={startup.image} name={startup.name} />
                        )}
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-[55%] flex flex-col justify-center">
                        <div className="mb-3">
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 tracking-tight">
                                {startup.name}
                            </h3>
                        </div>

                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            {startup.description}
                        </p>

                        <div>
                            <Link
                                href={`/startuplar/${startup.id}`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-bold rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                            >
                                İncele
                            </Link>
                        </div>

                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <main className="bg-white">
            <PageHeader
                title="Startuplarımız"
                description="Ajans bünyesinde kuluçkaya yatırdığımız ve hayata geçirdiğimiz girişimlerimiz."
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col gap-10">
                        {startups.length > 0 ? startups.map((startup, index) => (
                            <StartupCard key={startup.id} startup={startup} index={index} />
                        )) : (
                            <div className="py-24 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                                <p className="text-xl text-gray-500 font-medium">Henüz startup eklenmemiş.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

