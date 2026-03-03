"use client";

import { serviceCategories } from "@/lib/data";
import { Laptop, ShoppingCart, Megaphone, BarChart, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

// Helper to map icons to categories for visual consistency
const categoryIcons: Record<string, any> = {
    "yazilim-teknoloji": Laptop,
    "reklam-yonetimi": Megaphone,
    "marka-icerik": BarChart,
    "buyume-seo": ShoppingCart
};

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Hizmetlerimiz"
                description="Markanızın dijital dönüşümü için uçtan uca, profesyonel çözümler."
            />

            <section className="bg-white text-black py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 gap-24">
                        {serviceCategories.map((category, index) => {
                            const Icon = categoryIcons[category.id] || Laptop;
                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center py-12 border-b border-gray-100 last:border-0`}
                                >
                                    <div className="lg:w-1/2 flex justify-center">
                                        <div className="w-full max-w-md aspect-square bg-gray-50 rounded-3xl flex items-center justify-center p-12">
                                            <Icon size={120} className="text-gray-200 stroke-1" />
                                        </div>
                                    </div>

                                    <div className="lg:w-1/2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-black text-white rounded-lg">
                                                <Icon size={24} />
                                            </div>
                                            <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Hizmet Gurubu</span>
                                        </div>

                                        <h2 className="text-4xl font-display font-bold mb-6">{category.title}</h2>
                                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                            {category.description}
                                        </p>

                                        <div className="space-y-6 mb-10">
                                            {category.subServices.map((sub, i) => (
                                                <div key={i} className="group">
                                                    <Link href={sub.href} className="flex items-center gap-3 text-lg font-bold hover:text-gray-600 transition-colors">
                                                        <CheckCircle size={20} className="text-black" />
                                                        {sub.title}
                                                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                                    </Link>
                                                    <p className="text-gray-500 ml-8 text-sm mt-1">{sub.description}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={category.href}
                                            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                                        >
                                            Kategoriyi İncele
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
