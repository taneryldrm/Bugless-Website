"use client";

import { referencesData } from "@/lib/data";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { storage, ReferenceItem } from "@/lib/storage";
import { motion } from "framer-motion";

const categoryMap: Record<string, ReferenceItem["category"]> = {
    "website-referanslari": "website",
    "sosyal-medya-referanslari": "social",
    "reklam-yonetimi-referanslari": "ads",
    "crm-referanslari": "crm",
};

export default function ReferenceCategoryPage() {
    const params = useParams();
    const categoryId = params.category as string;
    const category = referencesData.find((c) => c.id === categoryId);

    const [refs, setRefs] = useState<ReferenceItem[]>([]);

    useEffect(() => {
        const storageCategory = categoryMap[categoryId];
        if (storageCategory) {
            setRefs(storage.getReferences().filter((r) => r.category === storageCategory));
        }
    }, [categoryId]);

    if (!category) {
        notFound();
    }

    /* ── Laptop Frame Mockup ── */
    const LaptopMockup = ({ image, name, fallbackLabel }: { image?: string; name: string; fallbackLabel: string }) => (
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
                        <span className="font-bold text-sm uppercase tracking-widest">{fallbackLabel}</span>
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

    /* ── Reference Card (dynamic/localStorage) ── */
    const DynamicReferenceCard = ({ ref_item, index }: { ref_item: ReferenceItem; index: number }) => {
        const isReversed = index % 2 !== 0;

        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
                <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 p-8 md:p-12`}>
                    {/* Laptop Mockup */}
                    <div className="w-full md:w-[45%] flex-shrink-0">
                        <LaptopMockup image={ref_item.image} name={ref_item.name} fallbackLabel={ref_item.category} />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-[55%] flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3 tracking-tight">
                            {ref_item.name}
                        </h3>

                        {ref_item.description && (
                            <p className="text-gray-600 text-base leading-relaxed mb-8">
                                {ref_item.description}
                            </p>
                        )}

                        {ref_item.link && (
                            <div>
                                <a
                                    href={ref_item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-bold rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                                >
                                    İncele
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    /* ── Static Reference Card (from data.ts items) ── */
    const StaticReferenceCard = ({ name, index }: { name: string; index: number }) => {
        const isReversed = index % 2 !== 0;

        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
                <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 p-8 md:p-12`}>
                    {/* Laptop Mockup */}
                    <div className="w-full md:w-[45%] flex-shrink-0">
                        <LaptopMockup name={name} fallbackLabel={name} />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-[55%] flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3 tracking-tight">
                            {name}
                        </h3>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Bu referans henüz detaylandırılmamıştır.
                        </p>
                    </div>
                </div>
            </motion.div>
        );
    };

    const hasStorageRefs = refs.length > 0;

    return (
        <main className="bg-white">
            <PageHeader
                title={category.title}
                description={category.description}
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col gap-10">
                        {/* Dynamic references from localStorage */}
                        {hasStorageRefs && refs.map((ref, i) => (
                            <DynamicReferenceCard key={ref.id} ref_item={ref} index={i} />
                        ))}

                        {/* Static references from data.ts (shown only if no localStorage refs) */}
                        {!hasStorageRefs && category.items.map((name, i) => (
                            <StaticReferenceCard key={i} name={name} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

