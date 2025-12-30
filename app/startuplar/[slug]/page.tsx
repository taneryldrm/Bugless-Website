import { startupsData } from "@/lib/data";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle, Code, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
    return startupsData.map((startup) => ({
        slug: startup.id,
    }));
}

export default async function StartupDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const startup = startupsData.find((s) => s.id === slug);

    if (!startup) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={startup.name}
                description={startup.category}
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <div className="flex items-center gap-4 mb-8">
                                <span className={cn(
                                    "px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase",
                                    startup.status === "Yayında" ? "bg-green-100 text-green-700" :
                                        startup.status === "Beta Yayında" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                                )}>
                                    {startup.status}
                                </span>
                            </div>

                            <div className="prose prose-lg max-w-none mb-12">
                                <h2 className="text-3xl font-display font-bold mb-6">Proje Hakkında</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {startup.fullDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                    <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
                                        <Rocket size={20} /> Özellikler
                                    </h3>
                                    <div className="space-y-3">
                                        {startup.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle className="text-black shrink-0" size={18} />
                                                <span className="text-gray-700 font-medium text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-black text-white rounded-2xl p-8 border border-gray-800">
                                    <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
                                        <Code size={20} /> Teknoloji Yığını
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {startup.techStack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-32 space-y-8">
                                <div className="bg-gray-100 p-8 rounded-2xl">
                                    <h3 className="font-bold mb-4">Diğer Girişimlerimiz</h3>
                                    <nav className="flex flex-col gap-3">
                                        {startupsData.filter(s => s.id !== startup.id).map(s => (
                                            <Link
                                                key={s.id}
                                                href={s.href}
                                                className="flex items-center justify-between text-gray-600 hover:text-black py-2 border-b border-gray-200 last:border-0 transition-colors"
                                            >
                                                {s.name}
                                                <ArrowRight size={16} />
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
