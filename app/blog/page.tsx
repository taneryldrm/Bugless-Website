import { PageHeader } from "@/components/ui/PageHeader";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Revalidate every 60 seconds
export const revalidate = 60;

async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt
  }`;
    return client.fetch(query);
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <>
            <PageHeader
                title="Blog"
                description="Dijital dünya, teknoloji ve tasarım hakkında içgörülerimiz."
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {posts.length > 0 ? (
                            posts.map((post: any) => (
                                <article
                                    key={post._id}
                                    className="flex flex-col h-full bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow group"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full">
                                            {post.category || "Genel"}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("tr-TR") : ""}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-display font-bold mb-4 group-hover:text-amber-500 transition-colors">
                                        <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                                    </h2>

                                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug.current}`}
                                        className="inline-flex items-center gap-2 font-bold text-black hover:gap-4 transition-all"
                                    >
                                        Devamını Oku <ArrowRight size={18} />
                                    </Link>
                                </article>
                            ))
                        ) : (
                            <div className="col-span-2 text-center py-12">
                                <p className="text-xl text-gray-500">Henüz yazı eklenmemiş. Lütfen daha sonra tekrar deneyin.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
