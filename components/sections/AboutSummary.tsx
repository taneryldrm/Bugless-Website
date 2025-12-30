"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSummary() {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
                            Dijital Geleceği <br />
                            <span className="text-gray-400">Birlikte Şekillendiriyoruz.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <p className="text-xl text-gray-800 leading-relaxed mb-8">
                            Bugless Digital olarak, markaların dijital dönüşüm yolculuklarında güvenilir bir partner olmayı hedefliyoruz. İnovatif tasarım anlayışımız ve güçlü teknik altyapımız ile sadece bugünü değil, geleceği de kurguluyoruz.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Web tasarımından e-ticarete, CRM çözümlerinden dijital pazarlamaya kadar geniş bir yelpazede hizmet sunarak, işinizi büyütmeniz için gereken tüm araçları sağlıyoruz.
                        </p>
                        <Link
                            href="/hakkimizda"
                            className="inline-flex items-center gap-2 text-black font-semibold border-b border-black hover:gap-4 transition-all pb-1 mb-12"
                        >
                            Hikayemizi Keşfet <ArrowRight size={20} />
                        </Link>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            <div>
                                <h4 className="text-3xl font-bold font-display">50+</h4>
                                <p className="text-sm text-gray-500 mt-1">Tamamlanan Proje</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold font-display">%100</h4>
                                <p className="text-sm text-gray-500 mt-1">Müşteri Memnuniyeti</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold font-display">7/24</h4>
                                <p className="text-sm text-gray-500 mt-1">Teknik Destek</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
