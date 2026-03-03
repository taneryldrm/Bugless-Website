"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { useState, useEffect } from "react";
import { storage, BlogItem } from "@/lib/storage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogItem[]>([]);

    useEffect(() => {
        setPosts(storage.getBlog());
    }, []);

    return (
        <main className="bg-white">
            <PageHeader
                title="Blog"
                description="Dijital dünya, teknoloji ve tasarım hakkında içgörülerimiz."
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <article
                                    key={post.id}
                                    className="flex flex-col h-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
                                >
                                    {/* Cover Image */}
                                    {post.image && (
                                        <div className="aspect-video w-full bg-gray-200 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    )}

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full">
                                                {post.category || "Genel"}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("tr-TR") : ""}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-display font-bold mb-4 group-hover:text-amber-500 transition-colors">
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h2>

                                        <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 font-bold text-black hover:gap-4 transition-all"
                                        >
                                            Devamını Oku <ArrowRight size={18} />
                                        </Link>
                                    </div>
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
        </main>
    );
}
