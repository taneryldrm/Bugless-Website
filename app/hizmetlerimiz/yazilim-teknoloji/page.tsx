"use client";

import { serviceCategories } from "@/lib/data";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function YazilimTeknolojiCategoryPage() {
    const category = serviceCategories.find((c) => c.id === "yazilim-teknoloji");

    if (!category) {
        notFound();
    }

    return (
        <main className="bg-white">
            <PageHeader
                title={category.title}
                description={category.description}
            />

            <section className="bg-white text-black">
                {category.subServices.map((sub, index) => (
                    <div
                        key={sub.id}
                        id={sub.id}
                        className={`py-24 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
                    >
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl">
                                <h2 className="text-4xl font-display font-bold mb-6">{sub.title}</h2>
                                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                                    {sub.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    {sub.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="bg-black/5 p-1 rounded-full shrink-0 mt-1">
                                                <CheckCircle className="text-black" size={20} />
                                            </div>
                                            <span className="text-lg text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={sub.href}
                                    className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                                >
                                    Detaylı İncele ve Teklif Al
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
