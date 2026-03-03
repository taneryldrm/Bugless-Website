"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { useState, useEffect } from "react";
import { storage, ReferenceItem } from "@/lib/storage";
import { referencesData } from "@/lib/data";
import { motion } from "framer-motion";

export default function ReferencesPage() {
    const [references, setReferences] = useState<ReferenceItem[]>([]);
    const staticWebsiteNames = referencesData.find(r => r.id === "website-referanslari")?.items || [];
    const staticCrmNames = referencesData.find(r => r.id === "crm-referanslari")?.items || [];

    useEffect(() => {
        setReferences(storage.getReferences());
    }, []);

    const websiteRefs = references.filter(r => r.category === "website");
    const socialRefs = references.filter(r => r.category === "social");
    const adsRefs = references.filter(r => r.category === "ads");
    const crmRefs = references.filter(r => r.category === "crm");

    const EmptyState = ({ text }: { text: string }) => (
        <div className="py-12 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 italic font-medium">{text}</p>
        </div>
    );

    /* ── Laptop Frame Mockup ── */
    const LaptopMockup = ({ image, name, category }: { image?: string; name: string; category: string }) => (
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
                        <span className="font-bold text-sm uppercase tracking-widest">{category}</span>
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

    /* ── Reference Card (image-based mockup) ── */
    const ReferenceCard = ({ ref_item, index }: { ref_item: ReferenceItem; index: number }) => {
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
                    {/* Left — Laptop Mockup */}
                    <div className="w-full md:w-[45%] flex-shrink-0">
                        <LaptopMockup image={ref_item.image} name={ref_item.name} category={ref_item.category} />
                    </div>

                    {/* Right — Content */}
                    <div className="w-full md:w-[55%] flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3 tracking-tight">
                            {ref_item.name}
                        </h3>

                        {ref_item.description && (
                            <p className="text-gray-600 text-base leading-relaxed mb-8">
                                {ref_item.description}
                            </p>
                        )}

                        <div>
                            {ref_item.link ? (
                                <a
                                    href={ref_item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-bold rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                                >
                                    İncele
                                </a>
                            ) : (
                                <span className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-bold rounded-full uppercase tracking-widest">
                                    İncele
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    /* ── Static image map for website references ── */
    const refImageMap: Record<string, string> = {
        "WRO48": "/images/ref-wro48.png",
        "İçel Solar Market": "/images/ref-icel-solar.png",
        "Serene": "/images/ref-serene.png",
        "Vera Temizlik": "/images/ref-vera-temizlik.png",
        "Uçanlar": "/images/ref-ucanlar.png",
    };

    /* ── Static Website Reference Card ── */
    const StaticWebsiteCard = ({ name, index }: { name: string; index: number }) => {
        const isReversed = index % 2 !== 0;
        const staticImage = refImageMap[name];

        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
                <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 p-8 md:p-12`}>
                    {/* Mockup Image */}
                    <div className="w-full md:w-[55%] flex-shrink-0">
                        {staticImage ? (
                            <div className="flex items-center justify-center">
                                <img
                                    src={staticImage}
                                    alt={name}
                                    className="w-full max-w-[560px] h-auto object-contain"
                                />
                            </div>
                        ) : (
                            <LaptopMockup name={name} category="website" />
                        )}
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-[55%] flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3 tracking-tight">
                            {name}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            Bugless Digital tarafından tasarlanmış ve geliştirilmiş profesyonel dijital çözüm.
                        </p>
                        <div>
                            <span className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-bold rounded-full uppercase tracking-widest">
                                İncele
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    const renderSection = (
        id: string,
        title: string,
        refs: ReferenceItem[],
        emptyText: string,
        staticNames?: string[],
        isLast?: boolean
    ) => (
        <div id={id} className={`${isLast ? "" : "mb-28"} scroll-mt-28`}>
            <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold mb-4 text-black uppercase tracking-tighter">
                    {title}
                </h2>
                <div className="w-16 h-1 bg-black mx-auto"></div>
            </div>
            <div className="flex flex-col gap-10">
                {refs.length > 0 ? refs.map((ref, i) => (
                    <ReferenceCard key={ref.id} ref_item={ref} index={i} />
                )) : staticNames && staticNames.length > 0 ? staticNames.map((name, i) => (
                    <StaticWebsiteCard key={i} name={name} index={i} />
                )) : <EmptyState text={emptyText} />}
            </div>
        </div>
    );

    return (
        <main className="bg-white">
            <PageHeader
                title="Referanslarımız"
                description="Bizimle çalışmayı tercih eden ve birlikte büyüdüğümüz değerli iş ortaklarımız."
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6 max-w-6xl">
                    {renderSection("website", "Website Referansları", websiteRefs, "Henüz web sitesi referansı eklenmemiş.", staticWebsiteNames)}
                    {renderSection("sosyal-medya", "Sosyal Medya Referansları", socialRefs, "Henüz sosyal medya referansı eklenmemiş.")}
                    {renderSection("reklam-yonetimi", "Reklam Yönetimi Referansları", adsRefs, "Henüz reklam yönetimi referansı eklenmemiş.")}
                    {renderSection("crm", "CRM Referansları", crmRefs, "Henüz CRM referansı eklenmemiş.", staticCrmNames, true)}
                </div>
            </section>
        </main>
    );
}

