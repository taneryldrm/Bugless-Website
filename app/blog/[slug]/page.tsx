"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { useState, useEffect } from "react";
import { storage, BlogItem } from "@/lib/storage";
import { useParams, notFound } from "next/navigation";

export default function BlogPostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogItem | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const posts = storage.getBlog();
        const found = posts.find(p => p.slug === slug);
        setPost(found || null);
        setLoading(false);
    }, [slug]);

    if (loading) return null;

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-white">
            <PageHeader
                title={post.title}
                description={post.category || "Blog"}
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Cover Image */}
                    {post.image && (
                        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div className="prose prose-lg max-w-none">
                        {post.publishedAt && (
                            <p className="text-gray-500 mb-8">{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</p>
                        )}
                        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {post.content}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
