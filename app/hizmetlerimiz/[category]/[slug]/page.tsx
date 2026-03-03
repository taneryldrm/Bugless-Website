import { serviceCategories } from "@/lib/data";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
    const params: { category: string; slug: string }[] = [];
    serviceCategories.forEach((category) => {
        category.subServices.forEach((sub) => {
            // Split the href to get the slug from /hizmetlerimiz/category/slug
            const parts = sub.href.split("/");
            const slug = parts[parts.length - 1];
            params.push({
                category: category.id,
                slug: slug,
            });
        });
    });
    return params;
}

export default async function SubServicePage({
    params
}: {
    params: Promise<{ category: string; slug: string }>
}) {
    const { category: categoryId, slug } = await params;

    const category = serviceCategories.find((c) => c.id === categoryId);
    if (!category) notFound();

    const subService = category.subServices.find((s) => s.href.endsWith(slug));
    if (!subService) notFound();

    return (
        <main className="bg-white">
            <PageHeader
                title={subService.title}
                description={subService.description}
                ctaText="Projeniz İçin Teklif Alın"
                ctaHref="/iletisim"
                breadcrumb={
                    <Link
                        href={category.href}
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        {category.title}
                        <ArrowRight size={12} />
                        <span className="text-white">{subService.title}</span>
                    </Link>
                }
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 mb-16">
                            <h2 className="text-3xl font-display font-bold mb-8">Neler Sunuyoruz?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {subService.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-50">
                                        <div className="bg-black text-white p-1 rounded-full shrink-0 mt-1">
                                            <CheckCircle size={18} />
                                        </div>
                                        <span className="text-lg font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-xl text-gray-600 italic">
                                "{subService.description}"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
