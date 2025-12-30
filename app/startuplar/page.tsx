"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { Rocket, ExternalLink } from "lucide-react";
import Link from "next/link";

const startups = [
    {
        name: "FinTech Pro",
        category: "FinTech",
        description: "KOBİ'ler için geliştirilmiş, yapay zeka destekli finansal analiz ve nakit akışı yönetim platformu. Gelir-gider takibini otomatikleştirir, geleceğe yönelik finansal projeksiyonlar sunar.",
        status: "Beta Yayında",
        link: "#"
    },
    {
        name: "EcoLog",
        category: "Lojistik / Sustainability",
        description: "Lojistik firmaları için karbon ayak izi hesaplama ve optimizasyon aracı. Rotaları analiz ederek hem yakıt tasarrufu sağlar hem de çevresel etkiyi minimize eder.",
        status: "Geliştirme Aşamasında",
        link: "#"
    },
    {
        name: "SmartMenu",
        category: "Horeca",
        description: "Restoranlar için QR tabanlı, dinamik ve çok dilli dijital menü sistemi. Sipariş verme ve ödeme özellikleriyle entegre çalışır.",
        status: "Yayında",
        link: "#"
    }
];

export default function StartupsPage() {
    return (
        <>
            <PageHeader
                title="Startuplarımız"
                description="Ajans bünyesinde kuluçkaya yatırdığımız ve hayata geçirdiğimiz girişimlerimiz."
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {startups.map((startup, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-black/10 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                                        <Rocket size={32} className="text-black" />
                                    </div>
                                    <span className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase ${startup.status === "Yayında" ? "bg-green-100 text-green-700" :
                                            startup.status === "Beta Yayında" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                                        }`}>
                                        {startup.status}
                                    </span>
                                </div>

                                <div className="text-xs font-bold text-gray-400 mb-2 uppercase">{startup.category}</div>
                                <h3 className="text-3xl font-display font-bold mb-4">{startup.name}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8 h-24">
                                    {startup.description}
                                </p>

                                <Link href={startup.link} className="inline-flex items-center gap-2 font-bold text-black border-b border-black pb-1 hover:gap-3 transition-all">
                                    Projeyi İncele <ExternalLink size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
