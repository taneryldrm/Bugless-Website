import { referencesData } from "@/lib/data";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { motion } from "framer-motion";

export function generateStaticParams() {
    return referencesData.map((category) => ({
        category: category.id,
    }));
}

export default async function ReferenceCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: categoryId } = await params;
    const category = referencesData.find((c) => c.id === categoryId);

    if (!category) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={category.title}
                description={category.description}
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {category.items.map((ref, i) => (
                            <div
                                key={i}
                                className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <span className="text-gray-400 font-bold">{ref}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
