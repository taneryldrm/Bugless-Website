"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { motion } from "framer-motion";

const webReferences = ["Referans Firma 1", "Referans Firma 2", "Referans Firma 3", "Referans Firma 4"];
const socialReferences = ["Referans Firma 5", "Referans Firma 6", "Referans Firma 7", "Referans Firma 8"];
const adReferences = ["Referans Firma 9", "Referans Firma 10", "Referans Firma 11", "Referans Firma 12"];
const crmReferences = ["Referans Firma 13", "Referans Firma 14", "Referans Firma 15", "Referans Firma 16"];

export default function ReferencesPage() {
    return (
        <>
            <PageHeader
                title="Referanslarımız"
                description="Bizimle çalışmayı tercih eden ve birlikte büyüdüğümüz değerli iş ortaklarımız."
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">

                    <div id="website" className="mb-24 scroll-mt-28">
                        <h2 className="text-2xl font-display font-bold mb-8 border-b border-gray-200 pb-4">Website Referansları</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {webReferences.map((ref, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 hover:shadow-lg transition-shadow"
                                >
                                    <span className="text-gray-400 font-bold">{ref}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div id="sosyal-medya" className="mb-24 scroll-mt-28">
                        <h2 className="text-2xl font-display font-bold mb-8 border-b border-gray-200 pb-4">Sosyal Medya Referansları</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {socialReferences.map((ref, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 hover:shadow-lg transition-shadow"
                                >
                                    <span className="text-gray-400 font-bold">{ref}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div id="reklam-yonetimi" className="mb-24 scroll-mt-28">
                        <h2 className="text-2xl font-display font-bold mb-8 border-b border-gray-200 pb-4">Reklam Yönetimi Referansları</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {adReferences.map((ref, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 hover:shadow-lg transition-shadow"
                                >
                                    <span className="text-gray-400 font-bold">{ref}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div id="crm" className="scroll-mt-28">
                        <h2 className="text-2xl font-display font-bold mb-8 border-b border-gray-200 pb-4">CRM Referansları</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {crmReferences.map((ref, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 hover:shadow-lg transition-shadow"
                                >
                                    <span className="text-gray-400 font-bold">{ref}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
