"use client";

import { motion } from "framer-motion";
import { Laptop, ShoppingCart, BarChart, Users, Megaphone, MonitorSmartphone } from "lucide-react";
import Link from 'next/link';

const services = [
    {
        icon: Laptop,
        title: "Kurumsal Web Sitesi",
        description: "Modern, hızlı ve mobil uyumlu kurumsal web siteleri.",
        href: "/hizmetlerimiz#web",
    },
    {
        icon: ShoppingCart,
        title: "E-Ticaret Sitesi",
        description: "Satış odaklı, güvenli ve yönetimi kolay e-ticaret çözümleri.",
        href: "/hizmetlerimiz#eticaret",
    },
    {
        icon: MonitorSmartphone,
        title: "Portföy & Blog",
        description: "Kişisel markanızı veya içeriklerinizi öne çıkaran tasarımlar.",
        href: "/hizmetlerimiz#portfolyo",
    },
    {
        icon: Users,
        title: "CRM Sistemleri",
        description: "Müşteri ilişkilerinizi yöneteceğiniz özel yazılım çözümleri.",
        href: "/hizmetlerimiz#crm",
    },
    {
        icon: Megaphone,
        title: "Reklam Yönetimi",
        description: "Google ve Sosyal Medya reklamları ile hedef kitlenize ulaşın.",
        href: "/hizmetlerimiz#reklam",
    },
    {
        icon: BarChart,
        title: "Sosyal Medya",
        description: "Markanızın sosyal medyadaki sesini profesyonelce yönetin.",
        href: "/hizmetlerimiz#sosyalmedya",
    },
];

export function ServicesOverview() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Neler Yapıyoruz?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Markanızın dijital dünyadaki tüm ihtiyaçları için uçtan uca çözümler üretiyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link key={index} href={service.href} className="group relative">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full p-8 rounded-2xl border border-white/5 hover:border-white/20 bg-neutral-900/40 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-neutral-900/60 group-hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                        <service.icon className="text-white ring-0 group-hover:text-blue-400 transition-colors" size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 font-display">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
