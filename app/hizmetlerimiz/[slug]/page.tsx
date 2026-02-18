import { servicesData } from "@/lib/data";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.id,
    }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={(service as any).heroTitle || service.title}
                description={(service as any).heroSubtitle || service.description}
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <div className="prose prose-lg max-w-none mb-12">
                                {/* Only show standard title if we don't have detailed features (custom layout) */}
                                {!(service as any).detailedFeatures && (
                                    <h2 className="text-3xl font-display font-bold mb-6">Hizmet Detayı</h2>
                                )}
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {service.fullDescription}
                                </p>
                            </div>

                            {/* Conditional Rendering for Rich Content (Social Media & others in future) */}
                            {(service as any).detailedFeatures ? (
                                <div className="space-y-16">
                                    {/* Detailed Features */}
                                    <div>
                                        <h3 className="text-2xl font-bold font-display mb-8">Sosyal Medya Yönetimi Hizmetlerimiz</h3>
                                        <div className="grid gap-6">
                                            {(service as any).detailedFeatures.map((feature: any, i: number) => (
                                                <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                                                    <h4 className="text-xl font-bold font-display mb-3 text-black">{feature.title}</h4>
                                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tools Section */}
                                    {(service as any).tools && (
                                        <div>
                                            <h3 className="text-2xl font-bold font-display mb-6">{(service as any).tools.title}</h3>
                                            <p className="text-gray-600 mb-8 text-lg">{(service as any).tools.description}</p>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {(service as any).tools.items.map((item: any, i: number) => (
                                                    <div key={i} className="bg-black text-white rounded-2xl p-8 relative overflow-hidden group">
                                                        <div className="relative z-10">
                                                            <h4 className="font-bold text-lg mb-3 text-gray-200">{item.label}</h4>
                                                            <p className="text-white font-medium text-lg">{item.value}</p>
                                                        </div>
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Approaches Section */}
                                    {(service as any).approaches && (
                                        <div>
                                            <h3 className="text-2xl font-bold font-display mb-6">{(service as any).approaches.title}</h3>
                                            <p className="text-gray-600 mb-8 text-lg">{(service as any).approaches.description}</p>
                                            <div className="grid gap-6">
                                                {(service as any).approaches.items.map((item: any, i: number) => (
                                                    <div key={i} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                                        <div className="bg-gray-100 p-4 rounded-xl h-fit shrink-0">
                                                            <CheckCircle className="text-black" size={32} />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-xl mb-3 text-black">{item.title}</h4>
                                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Process Section */}
                                    {(service as any).process && (
                                        <div>
                                            <h3 className="text-2xl font-bold font-display mb-6">{(service as any).process.title}</h3>
                                            <p className="text-gray-600 mb-10 text-lg">{(service as any).process.description}</p>
                                            <div className="relative border-l-2 border-gray-200 ml-4 space-y-12 pb-4">
                                                {(service as any).process.steps.map((step: any, i: number) => (
                                                    <div key={i} className="relative pl-10">
                                                        <span className="absolute -left-[11px] top-0 bg-black border-4 border-white shadow-sm rounded-full w-6 h-6"></span>
                                                        <h4 className="font-bold text-xl mb-3 text-black">{step.title}</h4>
                                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                /* Fallback / Standard Layout */
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                    <h3 className="text-2xl font-bold font-display mb-6">Neler Sunuyoruz?</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle className="text-black shrink-0" size={20} />
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar / CTA */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-32 space-y-8">
                                <div className="bg-black text-white p-8 rounded-2xl">
                                    <h3 className="text-2xl font-bold font-display mb-4">Projenizi Başlatalım</h3>
                                    <p className="text-gray-400 mb-8">
                                        {(service as any).cta?.subtext || "Bu hizmetimiz hakkında daha fazla bilgi almak veya teklif istemek için bizimle iletişime geçin."}
                                    </p>
                                    <Link
                                        href="/iletisim"
                                        className="block w-full bg-white text-black text-center font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors"
                                    >
                                        {(service as any).cta?.text || "Teklif Al"}
                                    </Link>
                                </div>

                                <div className="bg-gray-100 p-8 rounded-2xl">
                                    <h3 className="font-bold mb-4">Diğer Hizmetlerimiz</h3>
                                    <nav className="flex flex-col gap-3">
                                        {servicesData.filter(s => s.id !== service.id).map(s => (
                                            <Link
                                                key={s.id}
                                                href={s.href}
                                                className="flex items-center justify-between text-gray-600 hover:text-black py-2 border-b border-gray-200 last:border-0 transition-colors"
                                            >
                                                {s.shortTitle}
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
