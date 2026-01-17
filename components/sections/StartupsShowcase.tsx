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
        <section className="py-24 bg-neutral-950 border-t border-white/10 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Girişimlerimiz</h2>
                        <p className="text-gray-400">Kendi bünyemizde geliştirdiğimiz ve büyüttüğümüz projeler.</p>
                    </div>
                    <div className="hidden md:block">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Rocket size={48} className="text-white/20" />
                        </motion.div>
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
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="group p-8 bg-neutral-900 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:bg-neutral-800 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-4">{startup.category}</div>
                            <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                {startup.name}
                            </h3>
                            <p className="text-gray-400 line-clamp-3">
                                {startup.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
