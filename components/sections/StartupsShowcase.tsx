"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

// Placeholder data for startups - usually would come from CMS or props
const startups = [
    {
        name: "Startup 1",
        description: "Finansal teknolojiler alanında yapay zeka destekli çözüm ortağı.",
        category: "FinTech"
    },
    {
        name: "Startup 2",
        description: "E-ticaret operasyonlarını otomatize eden akıllı yönetim paneli.",
        category: "SaaS"
    },
    {
        name: "Startup 3",
        description: "Sürdürülebilir enerji yönetimi için IoT tabanlı platform.",
        category: "IoT / Energy"
    }
];

export function StartupsShowcase() {
    return (
        <section className="py-24 bg-neutral-950 border-t border-white/10 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Girişimlerimiz</h2>
                        <p className="text-gray-400">Kendi bünyemizde geliştirdiğimiz ve büyüttüğümüz projeler.</p>
                    </div>
                    <div className="hidden md:block">
                        <Rocket size={48} className="text-white/20" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {startups.map((startup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-neutral-900 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all hover:bg-neutral-800 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]"
                        >
                            <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-bold tracking-wider text-gray-400 uppercase mb-4 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                                {startup.category}
                            </div>
                            <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-purple-400 transition-colors">
                                {startup.name}
                            </h3>
                            <p className="text-gray-400 line-clamp-3 group-hover:text-gray-300">
                                {startup.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
