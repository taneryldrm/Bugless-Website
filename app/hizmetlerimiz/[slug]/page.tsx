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
                title={service.title}
                description={service.description}
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <div className="prose prose-lg max-w-none mb-12">
                                <h2 className="text-3xl font-display font-bold mb-6">Hizmet Detayı</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {service.fullDescription}
                                </p>
                            </div>

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
                        </div>

                        {/* Sidebar / CTA */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-32 space-y-8">
                                <div className="bg-black text-white p-8 rounded-2xl">
                                    <h3 className="text-2xl font-bold font-display mb-4">Projenizi Başlatalım</h3>
                                    <p className="text-gray-400 mb-8">
                                        Bu hizmetimiz hakkında daha fazla bilgi almak veya teklif istemek için bizimle iletişime geçin.
                                    </p>
                                    <Link
                                        href="/iletisim"
                                        className="block w-full bg-white text-black text-center font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors"
                                    >
                                        Teklif Al
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
