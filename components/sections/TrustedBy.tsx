"use client";

import { motion } from "framer-motion";

const brands = [
    "TechGlobal", "Artemis", "Nebula", "Vortex", "Horizon",
    "Vertex", "Aura", "Hyperion", "Zenith", "Pinnacle"
];

export function TrustedBy() {
    return (
        <section className="py-10 bg-black border-b border-white/10 overflow-hidden">
            <div className="container mx-auto px-6 mb-6 text-center">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Bize Güvenen Markalar</p>
            </div>

            <div className="flex relative">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...brands, ...brands].map((brand, index) => (
                        <div key={index} className="mx-12 text-2xl font-display font-bold text-gray-700 hover:text-white transition-colors duration-300 cursor-default">
                            {brand}
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
                    {[...brands, ...brands].map((brand, index) => (
                        <div key={index} className="mx-12 text-2xl font-display font-bold text-gray-700 hover:text-white transition-colors duration-300 cursor-default">
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
